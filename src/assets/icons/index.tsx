import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L12.5 8L23 2" stroke="#39CDCC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 10L12.5 16L23 10" stroke="#39CDCC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    <path d="M2 18L12.5 24L23 18" stroke="#213F7D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5.5" stroke="#213F7D" strokeWidth="1.5"/>
    <path d="M11 11L14.5 14.5" stroke="#213F7D" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2C7.24 2 5 4.24 5 7V12L3 14V15H17V14L15 12V7C15 4.24 12.76 2 10 2Z" stroke="#213F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 15V16C8 17.1 8.9 18 10 18C11.1 18 12 17.1 12 16V15" stroke="#213F7D" strokeWidth="1.5"/>
  </svg>
);

export const DashboardIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 14C2 11.24 4.69 9 8 9C11.31 9 14 11.24 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const GuarantorsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="11" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M1 14C1 11.79 3.24 10 6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 14C15 11.79 12.76 10 10 10C9.3 10 8.63 10.13 8 10.38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const LoansIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M1 7H15" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 11H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const DecisionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SavingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10C2 7.24 4.24 5 7 5H14V12C14 13.1 13.1 14 12 14H7C4.24 14 2 11.76 2 9V10Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="11.5" cy="9.5" r="1" fill="currentColor"/>
    <path d="M7 5V3C7 2.45 7.45 2 8 2H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const LoanRequestsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2H13C13.55 2 14 2.45 14 3V13C14 13.55 13.55 14 13 14H3C2.45 14 2 13.55 2 13V3C2 2.45 2.45 2 3 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 6H11M5 9H9M5 12H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const WhitelistIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const KarmaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L9.8 5.3L14.5 5.6L11 8.8L12.1 13.4L8 10.9L3.9 13.4L5 8.8L1.5 5.6L6.2 5.3L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const OrganizationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 7V4C5 2.9 5.9 2 7 2H9C10.1 2 11 2.9 11 4V7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 10H14" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const LoanProductsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L10 5H15L11 8L12.5 13L8 10L3.5 13L5 8L1 5H6L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const SavingsProductsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14V6L8 2L13 6V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="6" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const FeesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 10.5C6 10.5 6.5 11.5 8 11.5C9.5 11.5 10.5 10.5 10.5 9.5C10.5 8.5 9.5 8 8 7.5C6.5 7 5.5 6.5 5.5 5.5C5.5 4.5 6.5 3.5 8 3.5C9.5 3.5 10 4.5 10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 2.5V3.5M8 11.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const TransactionsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5H14M11 2L14 5L11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11H2M5 8L2 11L5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ServicesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L9.5 6H14L10.5 8.5L12 12.5L8 10L4 12.5L5.5 8.5L2 6H6.5L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const ServiceAccountIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 14C2 11.24 4.69 9 8 9C9.2 9 10.32 9.33 11.26 9.89" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12L13.5 13.5L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SettlementsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 8H11M8 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ReportsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14V10L6 7L9 9L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 4H13V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PreferencesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4H14M4 8H12M6 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const FeesPricingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8H8M8 8L5 5M8 8L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8H8M8 8L11 5M8 8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AuditLogsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2H10L13 5V14H3V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M10 2V5H13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5 8H11M5 10.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SystemsMessagesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3H14C14.55 3 15 3.45 15 4V11C15 11.55 14.55 12 14 12H4L1 15V4C1 3.45 1.45 3 2 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5 7H11M5 9.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const LogoutIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14H3C2.45 14 2 13.55 2 13V3C2 2.45 2.45 2 3 2H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 11L14 8L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const FilterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3L6.5 9V14L9.5 12V9L14 3H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const DotsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="5" r="1.5" fill="#545F7D"/>
    <circle cx="10" cy="10" r="1.5" fill="#545F7D"/>
    <circle cx="10" cy="15" r="1.5" fill="#545F7D"/>
  </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 13L1 7L7 1" stroke="#213F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L1 13" stroke="#213F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BackArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 14L4 8L10 2" stroke="#545F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ViewDetailsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const BlacklistUserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 3L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ActivateUserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UserAvatarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#EEF0F2"/>
    <circle cx="50" cy="38" r="16" fill="#ADBAC7"/>
    <path d="M12 85C12 67.3 29.2 53 50 53C70.8 53 88 67.3 88 85" fill="#ADBAC7"/>
  </svg>
);

export const StarIcon: React.FC<{ filled?: boolean; className?: string }> = ({ filled = false, className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L9.8 5.8L15 6.2L11.2 9.5L12.5 14.5L8 11.7L3.5 14.5L4.8 9.5L1 6.2L6.2 5.8L8 1Z"
      stroke="#E9B200"
      fill={filled ? "#E9B200" : "none"}
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

export const SwitchOrgIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="14" height="14" rx="3" stroke="#213F7D" strokeWidth="1.5"/>
    <path d="M5 6L8 3L11 6M11 10L8 13L5 10" stroke="#213F7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 1V4M11 1V4M1 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const EyeIcon: React.FC<{ visible: boolean; className?: string }> = ({ visible, className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {visible ? (
      <>
        <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="#213F7D" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="2.5" stroke="#213F7D" strokeWidth="1.5"/>
      </>
    ) : (
      <>
        <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="#213F7D" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="2.5" stroke="#213F7D" strokeWidth="1.5"/>
        <path d="M2 14L14 2" stroke="#213F7D" strokeWidth="1.5" strokeLinecap="round"/>
      </>
    )}
  </svg>
);

export const UsersStatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#DF18FF" fillOpacity="0.1"/>
    <circle cx="20" cy="16" r="5" fill="#DF18FF"/>
    <path d="M8 33C8 27.48 13.37 23 20 23C26.63 23 32 27.48 32 33" fill="#DF18FF"/>
  </svg>
);

export const ActiveUsersStatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#5718FF" fillOpacity="0.1"/>
    <circle cx="20" cy="16" r="5" fill="#5718FF"/>
    <path d="M8 33C8 27.48 13.37 23 20 23C26.63 23 32 27.48 32 33" fill="#5718FF"/>
    <circle cx="28" cy="13" r="4" fill="#5718FF"/>
    <path d="M26 11L28 13L32 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LoansStatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#F55F44" fillOpacity="0.1"/>
    <rect x="10" y="14" width="20" height="13" rx="2" fill="#F55F44"/>
    <path d="M10 19H30" stroke="white" strokeWidth="1.5"/>
    <circle cx="20" cy="12" r="3" fill="#F55F44"/>
  </svg>
);

export const SavingsStatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#FF3366" fillOpacity="0.1"/>
    <path d="M10 26C10 22.13 14.48 19 20 19H30V28C30 29.1 29.1 30 28 30H20C14.48 30 10 27.87 10 24V26Z" fill="#FF3366"/>
    <circle cx="26" cy="24.5" r="1.5" fill="white"/>
    <path d="M20 19V16C20 15.45 20.45 15 21 15H23" stroke="#FF3366" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
