import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';

/**
 * @description A component that protects routes based on the user's authentication status.
 * If the user is authenticated, it renders the child components; otherwise, it redirects to the login page.
 * @param param0 A react component. Certainly a Route component for navigation.
 * @returns A react compnent based on isAuthenticated state.
 */
export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Retrieve authentication status from context
  const { isAuthenticated } = useAuth();
  // If authenticated, render children; otherwise, redirect to login page
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};
