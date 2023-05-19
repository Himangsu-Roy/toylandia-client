import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ path, element: Element, isAuthenticated }) {
  return isAuthenticated ? (
    <Route path={path} element={<Element />} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoute;
