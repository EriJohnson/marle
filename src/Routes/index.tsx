import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes as Router } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h1>Not found</h1>} />
    </Router>
  );
}
