import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';

export const DashboardPage: React.FC = () => (
  <DashboardLayout>
    <div style={{ padding: '20px 0' }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, color: '#213F7D', marginBottom: 24 }}>Dashboard</h1>
      <div style={{
        background: 'white',
        border: '1px solid #E0E0E0',
        borderRadius: 8,
        padding: '60px 24px',
        textAlign: 'center',
        color: '#8b8b8b',
        fontSize: 14
      }}>
        Dashboard overview coming soon.
      </div>
    </div>
  </DashboardLayout>
);
