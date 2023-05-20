import React from 'react';
import { Typography } from '@mui/material';

import { useLocation, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface IRequireAuth {
  children: React.ReactElement;
}

export function RequireAuth({ children }: IRequireAuth) {
  const location = useLocation();

  const { user, checked } = useAuth();

  if (!checked) return <Typography>Checking...</Typography>;

  if (!user) {
    return <Navigate to='/sign-in' state={{ from: location }} />;
  }

  return children;
}
