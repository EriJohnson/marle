import { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';
import Auth from 'types/Auth';

interface IAuthContext {
  isAuthenticated: boolean;
  handleLogin: (data: Auth) => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: { children: JSX.Element }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(payload: Auth) {
    const data = await AuthService.login(payload);

    localStorage.setItem('@OANSE:token', JSON.stringify(data.token));

    setIsAuthenticated(true);
    navigate('/home');
  }

  const value = useMemo(
    () => ({
      isAuthenticated,
      handleLogin,
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
