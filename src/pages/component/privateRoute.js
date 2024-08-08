// src/pages/component/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticated, element: Component }) => {
  if(authenticated){
    return Component;
  }else{
    alert("로그인 후 이용해주세요");
    return <Navigate to="/login" />
  }
  // return authenticated ? Component : <Navigate to="/" />;
}

export default PrivateRoute;