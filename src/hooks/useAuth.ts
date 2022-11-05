import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';
import useLocalStorage from './useLocalStorage';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const [token, seToken] = useLocalStorage<string>('token', '');

  // Retorna para página que o usuário estava tentando acessar antes de
  // fazer o login
  const from = location.state?.from?.pathname || '/home';

  useEffect(() => {
    if (token) {
      AuthService.httpClient.setAuthorization(token);
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  async function handleLogin(data: any) {
    setIsLoading(true);
    const response: any = await AuthService.login(data);

    seToken(response.token);
    AuthService.httpClient.setAuthorization(response.token);

    setIsAuthenticated(true);
    setIsLoading(false);
    navigate(from, { replace: true });
  }

  function handleLogout() {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    AuthService.httpClient.setAuthorization(undefined);
    navigate('/');
  }

  return { isAuthenticated, isLoading, handleLogin, handleLogout };
}
