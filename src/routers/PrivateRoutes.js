import React from "react";
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoutes = () => {
  const token = localStorage.getItem('jwt')
  return token ? <Outlet />: <Navigate to="/user" />
}

export default PrivateRoutes;
