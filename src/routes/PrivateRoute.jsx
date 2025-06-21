import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isAuthenticated = localStorage.getItem('is-authenticated') === 'true';

  return isAuthenticated ? <Outlet /> : <Navigate to="/pages/login" />;
}
