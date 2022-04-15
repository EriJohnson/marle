import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Login</h1>}></Route>
        <Route path='/register' element={<h1>Cadastro</h1>}></Route>
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
