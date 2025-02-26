import React, { useContext } from "react";
import AuthContext from "../context/AuthContextProvider";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
