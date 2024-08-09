import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component }) => {
  const access = localStorage.getItem("username");
  if(access){
    return Component
  }else{
    alert("로그인 후 이용해주세요");
    return <Navigate to="/login" />
  }
}
export default PrivateRoute;