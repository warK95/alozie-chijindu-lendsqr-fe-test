import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { fetchUserById } from '../services/userService';
import { useLocalStorage } from '../hooks';
import { formatCurrency } from '../utils';
import type { User } from '../types';
import {
  BackArrowIcon, UserAvatarIcon, StarIcon
} from '../assets/icons';
import './UserDetails.scss';

const TABS = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];

/**
 * @description This component is used to display a single field of user information in the User Details page. 
 * It takes a label and a value as props and renders them in a styled format. 
 * The component ensures that if the value is missing, it shows a placeholder instead of leaving it blank.
 * @param param0 The label of the data object.
 * @param param1 The value of the data object associated with the label.
 * @returns A div element that contains the label and value of a user detail field. The label is displayed in a smaller font size and lighter color, while the value is displayed in a larger font size and bolder weight. If the value is empty or null, it displays a dash (—) instead.
 */
const InfoField: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="user-details-page__field">
    <span className="user-details-page__label">{label}</span>
    <span className="user-details-page__value">{value || '—'}</span>
  </div>
);

export const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the user ID from the URL parameters using react-router's useParams hook.
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Use the custom useLocalStorage hook to manage localStorage for this user. The key is based on the user ID.
  const storage = useLocalStorage<User>(`user_${id}`);

  useEffect(() => {
    const load = async () => {
      if (!id) return;

      // Try localStorage first
      const cached = storage.get();
      if (cached) {
        setUser(cached);
        setLoading(false);
      }

      // Always fetch fresh data and update localStorage
      try {
        const result = await fetchUserById(id);
        if (result) {
          setUser(result);
          storage.set(result);
        } else {
          if (!cached) setNotFound(true);
        }
      } catch {
        if (!cached) setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading && !user) {
    return (
      <DashboardLayout>
        <div className="user-details-page__loading">
          <div className="spinner" />
        </div>
      </DashboardLayout>
    );
  }

  if (notFound || !user) {
    return (
      <DashboardLayout>
        <div className="user-details-page__error">
          <h2>User Not Found</h2>
          <p>The user you're looking for doesn't exist or has been removed.</p>
          <Link to="/users">← Back to Users</Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="user-details-page">
        <Link to="/users" className="user-details-page__back">
          <BackArrowIcon />
          Back to Users
        </Link>

        <div className="user-details-page__header">
          <h1 className="user-details-page__title">User Details</h1>
          <div className="user-details-page__actions">
            <button className="user-details-page__btn user-details-page__btn--blacklist">
              Blacklist User
            </button>
            <button className="user-details-page__btn user-details-page__btn--activate">
              Activate User
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="user-details-page__card">
          <div className="user-details-page__profile">
            <div className="user-details-page__avatar-section">
              <div className="user-details-page__avatar">
                <UserAvatarIcon />
              </div>
              <div className="user-details-page__name-section">
                <h2>{user.username}</h2>
                <p>{user.id}</p>
              </div>
            </div>

            <div className="user-details-page__divider" />

            <div className="user-details-page__tier-section">
              <h4>User's Tier</h4>
              <div className="user-details-page__stars">
                {[1, 2, 3].map((s) => (
                  <StarIcon key={s} filled={s <= user.tier} />
                ))}
              </div>
            </div>

            <div className="user-details-page__divider" />

            <div className="user-details-page__balance-section">
              <h3>{formatCurrency(user.accountBalance)}</h3>
              <p>{user.accountNumber}/{user.bankName}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="user-details-page__tabs">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`user-details-page__tab${activeTab === i ? ' user-details-page__tab--active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 0 && (
          <div className="user-details-page__details">
            {/* Personal Info */}
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">Personal Information</h3>
              <div className="user-details-page__grid">
                <InfoField label="Full Name" value={user.username} />
                <InfoField label="Phone Number" value={user.phoneNumber} />
                <InfoField label="Email Address" value={user.email} />
                <InfoField label="BVN" value={user.bvn} />
                <InfoField label="Gender" value={user.gender} />
                <InfoField label="Marital Status" value={user.maritalStatus} />
                <InfoField label="Children" value={user.children} />
                <InfoField label="Type of Residence" value={user.typeOfResidence} />
              </div>
            </div>

            {/* Education & Employment */}
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">Education and Employment</h3>
              <div className="user-details-page__grid-4">
                <InfoField label="Level of Education" value={user.levelOfEducation} />
                <InfoField label="Employment Status" value={user.employmentStatus} />
                <InfoField label="Sector of Employment" value={user.sectorOfEmployment} />
                <InfoField label="Duration of Employment" value={user.durationOfEmployment} />
                <InfoField label="Office Email" value={user.officeEmail} />
                <InfoField label="Monthly Income" value={user.monthlyIncome} />
                <InfoField label="Loan Repayment" value={user.loanRepayment.toLocaleString()} />
              </div>
            </div>

            {/* Socials */}
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">Socials</h3>
              <div className="user-details-page__grid-4">
                <InfoField label="Twitter" value={user.twitter} />
                <InfoField label="Facebook" value={user.facebook} />
                <InfoField label="Instagram" value={user.instagram} />
              </div>
            </div>

            {/* Guarantors */}
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">Guarantor</h3>
              {user.guarantors.map((g, i) => (
                <div key={i} className="user-details-page__guarantor">
                  <div className="user-details-page__grid-4">
                    <InfoField label="Full Name" value={g.fullName} />
                    <InfoField label="Phone Number" value={g.phoneNumber} />
                    <InfoField label="Email Address" value={g.email} />
                    <InfoField label="Relationship" value={g.relationship} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="user-details-page__details">
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">Documents</h3>
              <p style={{ color: '#8b8b8b', fontSize: '14px' }}>No documents uploaded yet.</p>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="user-details-page__details">
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">Bank Details</h3>
              <div className="user-details-page__grid-4">
                <InfoField label="Bank Name" value={user.bankName} />
                <InfoField label="Account Number" value={user.accountNumber} />
                <InfoField label="Account Balance" value={formatCurrency(user.accountBalance)} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="user-details-page__details">
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">Loans</h3>
              <p style={{ color: '#8b8b8b', fontSize: '14px' }}>No active loans.</p>
            </div>
          </div>
        )}

        {activeTab === 4 && (
          <div className="user-details-page__details">
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">Savings</h3>
              <p style={{ color: '#8b8b8b', fontSize: '14px' }}>No savings plans.</p>
            </div>
          </div>
        )}

        {activeTab === 5 && (
          <div className="user-details-page__details">
            <div className="user-details-page__section">
              <h3 className="user-details-page__section-title">App and System</h3>
              <div className="user-details-page__grid-4">
                <InfoField label="Status" value={user.status} />
                <InfoField label="Date Joined" value={user.dateJoined} />
                <InfoField label="Organization" value={user.organization} />
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
