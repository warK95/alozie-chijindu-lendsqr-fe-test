import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Retrieve authentication status from context
  const { isAuthenticated } = useAuth();
  // If authenticated, render children; otherwise, redirect to login page
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};
