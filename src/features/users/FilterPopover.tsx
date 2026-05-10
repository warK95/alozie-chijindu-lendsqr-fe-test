import React, { useCallback } from 'react';
import { useOnClickOutside } from '../../hooks';
import type { FilterState } from '../../types';
import { getOrganizations } from '../../services/userService';

interface FilterPopoverProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onApply: () => void;
  onReset: () => void;
  onClose: () => void;
}

export const FilterPopover: React.FC<FilterPopoverProps> = ({
  filters, onChange, onApply, onReset, onClose
}) => {
  const handleClickOutside = useCallback(() => onClose(), [onClose]);
  const ref = useOnClickOutside<HTMLDivElement>(handleClickOutside);
  const organizations = getOrganizations();

  const update = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="filter-popover" ref={ref}>
      <div className="filter-popover__field">
        <label>Organization</label>
        <select
          className="filter-popover__select"
          value={filters.organization}
          onChange={(e) => update('organization', e.target.value)}
        >
          <option value="">Select</option>
          {organizations.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="filter-popover__field">
        <label>Username</label>
        <input
          className="filter-popover__input"
          type="text"
          placeholder="User"
          value={filters.username}
          onChange={(e) => update('username', e.target.value)}
        />
      </div>

      <div className="filter-popover__field">
        <label>Email</label>
        <input
          className="filter-popover__input"
          type="email"
          placeholder="Email"
          value={filters.email}
          onChange={(e) => update('email', e.target.value)}
        />
      </div>

      <div className="filter-popover__field">
        <label>Date</label>
        <input
          className="filter-popover__input-date"
          type="date"
          value={filters.date}
          onChange={(e) => update('date', e.target.value)}
        />
      </div>

      <div className="filter-popover__field">
        <label>Phone Number</label>
        <input
          className="filter-popover__input"
          type="tel"
          placeholder="Phone Number"
          value={filters.phoneNumber}
          onChange={(e) => update('phoneNumber', e.target.value)}
        />
      </div>

      <div className="filter-popover__field" style={{ marginBottom: 0 }}>
        <label>Status</label>
        <select
          className="filter-popover__select"
          value={filters.status}
          onChange={(e) => update('status', e.target.value)}
        >
          <option value="">Select</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>
      </div>

      <div className="filter-popover__actions">
        <button className="filter-popover__reset" onClick={onReset}>Reset</button>
        <button className="filter-popover__apply" onClick={onApply}>Filter</button>
      </div>
    </div>
  );
};
