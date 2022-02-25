import React from 'react';
import { Navigate } from 'react-router-dom';
import { Children } from 'react/cjs/react.production.min';
import { UserContext } from '../userContext';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext)
  return login ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
