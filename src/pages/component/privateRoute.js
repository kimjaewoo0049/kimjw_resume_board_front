// src/pages/component/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticated, element: Component }) => {
  return authenticated ? Component : <Navigate to="/" />;
}

export default PrivateRoute;