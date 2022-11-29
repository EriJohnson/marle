import Layout from 'components/Layout';
import RequireAuth from 'routes/RequireAuth';
import Login from 'pages/Login';
import ErrorPage from 'pages/ErrorPage';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import RequirePermission from './RequirePermission';

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<RequireAuth />}>
          <Route
            path="leaders"
            element={
              <RequirePermission requiredRoles={['DEACON', 'ADMIN']}>
                <h1>Líderes</h1>
              </RequirePermission>
            }
          />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/not-authorized"
        element={
          <ErrorPage
            title="Acesso não autorizado!"
            message="Talvez você não tenha permissão para acessar este recurso. Entre em contanto com o diácono do OANSE ou com o administrador do sistema para lhe dar a devida permissão."
          />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}