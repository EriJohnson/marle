import { AuthProvider } from 'contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
