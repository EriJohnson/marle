import { createContext, ReactNode, useState } from 'react';
import AuthService from 'services/AuthService';
import Auth from 'types/Auth';

interface IAuthContext {
  isAuthenticated: boolean;
  handleLogin: (data: Auth) => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function handleLogin(data: Auth) {
    await AuthService.login(data);
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
