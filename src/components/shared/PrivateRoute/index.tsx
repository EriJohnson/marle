import useAuth from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Role = 'ADMIN' | 'DEACON' | 'DIRECTOR' | 'LEADER';

function FullPageLoading({ isLoading }: { isLoading: boolean }) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="secondary" />
    </Backdrop>
  );
}

export default function PrivateRoute({
  children,
  requiredRoles,
}: {
  children: JSX.Element;
  requiredRoles?: Role[];
}) {
  const location = useLocation();
  const { isLoading, isAuthenticated } = useAuth();

  const { user } = {
    user: { role: 'ADMIN' as Role },
  };

  if (isLoading) {
    return <FullPageLoading isLoading={isLoading} />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (requiredRoles?.length) {
    const userHasRequiredRole = !!(user && requiredRoles?.includes(user.role));

    if (isAuthenticated && !userHasRequiredRole) {
      return <h1>405</h1>;
    }
  }

  return children;
}
