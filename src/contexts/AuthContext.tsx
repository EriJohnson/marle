import useLocalStorage from 'hooks/useLocalStorage';
import { useSnackbar } from 'notistack';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';
import { User } from 'types/User';

interface ILoginProps {
  identifier: string;
  password: string;
}

interface IAuthContext {
  user: Partial<User>;
  isLoading: boolean;
  isAuthenticated: boolean;
  handleLogin: (data: ILoginProps) => Promise<void>;
  handleLogout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Partial<User>>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useLocalStorage<string | undefined>('token', '');
  const { enqueueSnackbar } = useSnackbar();

  // Retorna para página que o usuário estava tentando acessar antes de
  // fazer o login
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (token) {
      AuthService.httpClient.setAuthorization(token);
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  async function handleLogin(data: any) {
    try {
      setIsLoading(true);

      const response = await AuthService.login(data);

      setUser(response?.user);

      AuthService.httpClient.setAuthorization(response?.token);

      setToken(response?.token);

      setIsAuthenticated(true);

      navigate(from, { replace: true });
    } catch ({ message }) {
      enqueueSnackbar(`${message}`, { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUser(null);
    setIsAuthenticated(false);
    setToken(undefined);
    AuthService.httpClient.setAuthorization(undefined);

    navigate('/login');
  }

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated,
      handleLogin,
      handleLogout,
    }),
    [user, isLoading, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
