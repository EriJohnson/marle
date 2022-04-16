import { Login } from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<h1>Cadastro</h1>} />
        <Route path='/home' element={<h1>Seja bem-vindo(a)</h1>} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
