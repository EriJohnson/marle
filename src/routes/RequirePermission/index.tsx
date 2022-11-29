import useAuth from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

type Role = 'ADMIN' | 'DEACON' | 'DIRECTOR' | 'LEADER';

export default function RequirePermission({
  requiredRoles,
  children,
}: {
  requiredRoles?: Role[];
  children: JSX.Element;
}) {
  const location = useLocation();

  const { user } = useAuth();

  if (requiredRoles?.length) {
    const userHasRequiredRole = requiredRoles?.includes(user?.role);

    if (!userHasRequiredRole) {
      return (
        <Navigate to="/not-authorized" state={{ from: location }} replace />
      );
    }
  }

  return children;
}
