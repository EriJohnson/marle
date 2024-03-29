import useLocalStorage from 'hooks/useLocalStorage';
import { useSnackbar } from 'notistack';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import httpClient from 'services/api/httpClient';
import AuthService, {
  ILoginRequest,
  LoggedUser,
} from 'services/api/services/auth';

interface IAuthContext {
  user: LoggedUser;
  isLoading: boolean;
  isAuthenticated: boolean;
  handleLogin: (payload: ILoginRequest) => Promise<void>;
  handleLogout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useLocalStorage<LoggedUser | undefined>(
    'user',
    undefined
  );

  const { enqueueSnackbar } = useSnackbar();

  // Retorna para página que o usuário estava tentando acessar antes de
  // fazer o login
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    const token = localStorage.getItem('OANSE@token');

    if (token) {
      httpClient.defaults.headers.common.authorization = `Bearer ${token}`;
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  async function handleLogin(payload: ILoginRequest) {
    try {
      setIsLoading(true);

      const response = await AuthService.login(payload);

      setUser(response?.user);

      setIsAuthenticated(true);

      navigate(from, { replace: true });
    } catch ({ message }) {
      enqueueSnackbar(`${message}`, { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);

    localStorage.removeItem('OANSE@user');
    localStorage.removeItem('OANSE@token');

    delete httpClient.defaults.headers.common.authorization;

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
