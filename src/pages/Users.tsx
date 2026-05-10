import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { FilterPopover } from '../features/users/FilterPopover';
import { ActionMenu } from '../features/users/ActionMenu';
import {
  UsersStatIcon, ActiveUsersStatIcon, LoansStatIcon, SavingsStatIcon,
  FilterIcon, DotsIcon, ChevronLeftIcon, ChevronRightIcon
} from '../assets/icons';
import { fetchUsers, getUserStats } from '../services/userService';
import type { User, FilterState } from '../types';
import { getStatusClass, generatePageNumbers } from '../utils';
import './Users.scss';

const EMPTY_FILTERS: FilterState = {
  organization: '', username: '', email: '', date: '', phoneNumber: '', status: ''
};

export const UsersPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);
  const savedStatus = searchParams.get('status') || '';
  const savedOrg = searchParams.get('organization') || '';

  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeFilterCol, setActiveFilterCol] = useState<string | null>(null);
  const [activeActionMenu, setActiveActionMenu] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    ...EMPTY_FILTERS,
    status: savedStatus,
    organization: savedOrg,
  });
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    ...EMPTY_FILTERS,
    status: savedStatus,
    organization: savedOrg,
  });

  const stats = getUserStats();
  const totalPages = Math.ceil(total / pageSize);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetchUsers({ page: currentPage, pageSize, filters: appliedFilters });
      setUsers(result.users);
      setTotal(result.total);
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, appliedFilters]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleApplyFilter = () => {
    setAppliedFilters(filters);
    const params: Record<string, string> = { page: '1', pageSize: String(pageSize) };
    if (filters.status) params.status = filters.status;
    if (filters.organization) params.organization = filters.organization;
    setSearchParams(params);
    setActiveFilterCol(null);
  };

  const handleResetFilter = () => {
    setFilters(EMPTY_FILTERS);
    setAppliedFilters(EMPTY_FILTERS);
    setSearchParams({ page: '1', pageSize: String(pageSize) });
    setActiveFilterCol(null);
  };

  const handlePageChange = (page: number) => {
    const params: Record<string, string> = { page: String(page), pageSize: String(pageSize) };
    if (appliedFilters.status) params.status = appliedFilters.status;
    if (appliedFilters.organization) params.organization = appliedFilters.organization;
    setSearchParams(params);
  };

  const handlePageSizeChange = (size: number) => {
    const params: Record<string, string> = { page: '1', pageSize: String(size) };
    if (appliedFilters.status) params.status = appliedFilters.status;
    if (appliedFilters.organization) params.organization = appliedFilters.organization;
    setSearchParams(params);
  };

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  const COLUMNS = ['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status'];

  return (
    <DashboardLayout>
      <div className="users-page">
        <h1 className="users-page__title">Users</h1>

        {/* Stats */}
        <div className="users-page__stats">
          <div className="users-page__stat-card">
            <UsersStatIcon />
            <span className="users-page__stat-label">Users</span>
            <span className="users-page__stat-value">{stats.total.toLocaleString()}</span>
          </div>
          <div className="users-page__stat-card">
            <ActiveUsersStatIcon />
            <span className="users-page__stat-label">Active Users</span>
            <span className="users-page__stat-value">{stats.active.toLocaleString()}</span>
          </div>
          <div className="users-page__stat-card">
            <LoansStatIcon />
            <span className="users-page__stat-label">Users with Loans</span>
            <span className="users-page__stat-value">{stats.withLoans.toLocaleString()}</span>
          </div>
          <div className="users-page__stat-card">
            <SavingsStatIcon />
            <span className="users-page__stat-label">Users with Savings</span>
            <span className="users-page__stat-value">{stats.withSavings.toLocaleString()}</span>
          </div>
        </div>

        {/* Table */}
        <div className="users-page__table-wrapper">
          <div className="users-page__table-scroll">
            <table className="users-page__table">
              <thead>
                <tr>
                  {COLUMNS.map((col) => (
                    <th key={col} style={{ position: 'relative' }}>
                      <div
                        className="users-page__th-content"
                        onClick={() => setActiveFilterCol(activeFilterCol === col ? null : col)}
                      >
                        {col}
                        <FilterIcon />
                      </div>
                      {activeFilterCol === col && (
                        <FilterPopover
                          filters={filters}
                          onChange={setFilters}
                          onApply={handleApplyFilter}
                          onReset={handleResetFilter}
                          onClose={() => setActiveFilterCol(null)}
                        />
                      )}
                    </th>
                  ))}
                  <th />
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7}>
                      <div className="users-page__loading">
                        <div className="spinner" />
                      </div>
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      <div className="users-page__empty">No users found matching your filters.</div>
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user.id}
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate(`/users/${user.id}`)}
                    >
                      <td>{user.organization}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.dateJoined}</td>
                      <td>
                        <span className={getStatusClass(user.status)}>{user.status}</span>
                      </td>
                      <td className="users-page__action-cell" onClick={(e) => e.stopPropagation()}>
                        <div
                          className="users-page__action-btn"
                          onClick={() => setActiveActionMenu(activeActionMenu === user.id ? null : user.id)}
                          role="button"
                          aria-label="Actions"
                        >
                          <DotsIcon />
                        </div>
                        {activeActionMenu === user.id && (
                          <ActionMenu userId={user.id} onClose={() => setActiveActionMenu(null)} />
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="users-page__footer">
            <div className="users-page__per-page">
              Showing
              <div className="users-page__per-page-select">
                <select
                  value={pageSize}
                  onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                >
                  {[10, 20, 50, 100].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              out of {total.toLocaleString()}
            </div>

            <div className="users-page__pagination">
              <button
                className="users-page__page-btn users-page__page-btn--nav"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="Previous page"
              >
                <ChevronLeftIcon />
              </button>

              {pageNumbers.map((num, i) =>
                num === '...' ? (
                  <span key={`dots-${i}`} className="users-page__page-btn">...</span>
                ) : (
                  <button
                    key={num}
                    className={`users-page__page-btn${num === currentPage ? ' users-page__page-btn--active' : ''}`}
                    onClick={() => handlePageChange(num as number)}
                  >
                    {num}
                  </button>
                )
              )}

              <button
                className="users-page__page-btn users-page__page-btn--nav"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="Next page"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
