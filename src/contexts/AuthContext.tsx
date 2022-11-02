import useAuth from 'hooks/useAuth';
import { createContext, useMemo } from 'react';

interface ILoginProps {
  identifier: string;
  password: string;
}

interface IAuthContext {
  isLoading: boolean;
  isAuthenticated: boolean;
  handleLogin: (data: ILoginProps) => Promise<void>;
  handleLogout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated, handleLogin, handleLogout } = useAuth();

  const value = useMemo(
    () => ({
      isLoading,
      isAuthenticated,
      handleLogin,
      handleLogout,
    }),
    []
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
