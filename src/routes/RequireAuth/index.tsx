import FullPageLoading from 'components/shared/FullPageLoading';
import useAuth from 'hooks/useAuth';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const location = useLocation();
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <FullPageLoading isLoading={isLoading} />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
