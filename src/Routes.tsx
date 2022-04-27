import Login from 'pages/Login';
import Register from 'pages/Register';
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<h1>Seja bem-vindo(a)</h1>} />
        <Route path='*' element={<h1>Not found</h1>} />
      </Router>
    </BrowserRouter>
  );
}
