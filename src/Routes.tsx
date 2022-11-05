import PrivateRoute from 'components/shared/PrivateRoute';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <h1>Seja bem-vindo(a)</h1>
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
