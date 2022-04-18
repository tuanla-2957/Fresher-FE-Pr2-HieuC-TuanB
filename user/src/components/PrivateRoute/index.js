import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = window.localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
