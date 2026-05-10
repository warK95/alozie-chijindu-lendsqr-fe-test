import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';
import {
  LogoIcon, SearchIcon, BellIcon, DashboardIcon, UsersIcon, GuarantorsIcon,
  LoansIcon, DecisionIcon, SavingsIcon, LoanRequestsIcon, WhitelistIcon, KarmaIcon,
  OrganizationIcon, LoanProductsIcon, SavingsProductsIcon, FeesIcon, TransactionsIcon,
  ServicesIcon, ServiceAccountIcon, SettlementsIcon, ReportsIcon, PreferencesIcon,
  FeesPricingIcon, AuditLogsIcon, SystemsMessagesIcon, LogoutIcon, SwitchOrgIcon, ChevronDownIcon
} from '../assets/icons';
import './DashboardLayout.scss';

interface NavItem {
  icon: React.FC<{ className?: string }>;
  label: string;
  path?: string;
}

const CUSTOMER_ITEMS: NavItem[] = [
  { icon: UsersIcon, label: 'Users', path: '/users' },
  { icon: GuarantorsIcon, label: 'Guarantors' },
  { icon: LoansIcon, label: 'Loans' },
  { icon: DecisionIcon, label: 'Decision Models' },
  { icon: SavingsIcon, label: 'Savings' },
  { icon: LoanRequestsIcon, label: 'Loan Requests' },
  { icon: WhitelistIcon, label: 'Whitelist' },
  { icon: KarmaIcon, label: 'Karma' },
];

const BUSINESS_ITEMS: NavItem[] = [
  { icon: OrganizationIcon, label: 'Organization' },
  { icon: LoanProductsIcon, label: 'Loan Products' },
  { icon: SavingsProductsIcon, label: 'Savings Products' },
  { icon: FeesIcon, label: 'Fees and Charges' },
  { icon: TransactionsIcon, label: 'Transactions' },
  { icon: ServicesIcon, label: 'Services' },
  { icon: ServiceAccountIcon, label: 'Service Account' },
  { icon: SettlementsIcon, label: 'Settlements' },
  { icon: ReportsIcon, label: 'Reports' },
];

const SETTINGS_ITEMS: NavItem[] = [
  { icon: PreferencesIcon, label: 'Preferences' },
  { icon: FeesPricingIcon, label: 'Fees and Pricing' },
  { icon: AuditLogsIcon, label: 'Audit Logs' },
  { icon: SystemsMessagesIcon, label: 'Systems Messages' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const closeSidebar = () => setSidebarOpen(false);

  const renderNavItems = (items: NavItem[]) =>
    items.map((item) => (
      <Link
        key={item.label}
        to={item.path || '#'}
        className={`sidebar-nav__item${location.pathname === item.path ? ' sidebar-nav__item--active' : ''}`}
        onClick={closeSidebar}
      >
        <item.icon />
        {item.label}
      </Link>
    ));

  return (
    <div className="dashboard-layout">
      {/* Navbar */}
      <nav className="dashboard-layout__navbar">
        <Link to="/dashboard" className="dashboard-layout__logo" onClick={closeSidebar}>
          <LogoIcon />
          <span className="dashboard-layout__logo-text">lendsqr</span>
        </Link>

        <div className="dashboard-layout__search">
          <input
            type="text"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button aria-label="Search"><SearchIcon /></button>
        </div>

        <div className="dashboard-layout__nav-actions">
          <a href="#" className="dashboard-layout__docs-link">Docs</a>
          <div className="dashboard-layout__bell" role="button" aria-label="Notifications">
            <BellIcon />
          </div>
          <div className="dashboard-layout__user-profile">
            <div className="dashboard-layout__avatar">A</div>
            <span className="dashboard-layout__username">Adedeji</span>
            <ChevronDownIcon />
          </div>
          <button
            className={`dashboard-layout__hamburger${sidebarOpen ? ' dashboard-layout__hamburger--open' : ''}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className="dashboard-layout__body">
        {/* Overlay */}
        <div
          className={`dashboard-layout__sidebar-overlay${sidebarOpen ? ' dashboard-layout__sidebar-overlay--visible' : ''}`}
          onClick={closeSidebar}
        />

        {/* Sidebar */}
        <aside className={`dashboard-layout__sidebar${sidebarOpen ? ' dashboard-layout__sidebar--open' : ''}`}>
          <nav>
            <div className="sidebar-nav__switch-org">
              <SwitchOrgIcon />
              Switch Organization
              <ChevronDownIcon />
            </div>

            <Link
              to="/dashboard"
              className={`sidebar-nav__item${location.pathname === '/dashboard' ? ' sidebar-nav__item--active' : ''}`}
              onClick={closeSidebar}
            >
              <DashboardIcon />
              Dashboard
            </Link>

            <div className="sidebar-nav__section">
              <div className="sidebar-nav__section-title">Customers</div>
              {renderNavItems(CUSTOMER_ITEMS)}
            </div>

            <div className="sidebar-nav__section">
              <div className="sidebar-nav__section-title">Businesses</div>
              {renderNavItems(BUSINESS_ITEMS)}
            </div>

            <div className="sidebar-nav__section">
              <div className="sidebar-nav__section-title">Settings</div>
              {renderNavItems(SETTINGS_ITEMS)}
            </div>

            <div className="sidebar-nav__logout">
              <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                <LogoutIcon />
                Logout
              </a>
              <div className="sidebar-nav__version">v1.2.0</div>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="dashboard-layout__main">
          {children}
        </main>
      </div>
    </div>
  );
};
