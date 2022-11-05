import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';
import { useSnackbar } from 'notistack';
import useLocalStorage from './useLocalStorage';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const [token, seToken] = useLocalStorage<string>('token', '');
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
      const response: any = await AuthService.login(data);
      AuthService.httpClient.setAuthorization(response.token);
      seToken(response.token);
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
    localStorage.removeItem('token');
    AuthService.httpClient.setAuthorization(undefined);

    navigate('/login');
  }

  return { isAuthenticated, isLoading, handleLogin, handleLogout };
}
