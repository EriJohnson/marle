import Layout from 'components/Layout';
import RequireAuth from 'routes/RequireAuth';
import Login from 'pages/Login';
import ErrorPage from 'pages/ErrorPage';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import Leaders from 'pages/Leaders';
import RequirePermission from './RequirePermission';

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<Layout />}>
        <Route path="/" element={<RequireAuth />}>
          <Route
            path="leaders"
            element={
              <RequirePermission requiredRoles={['DEACON', 'ADMIN']}>
                <Leaders />
              </RequirePermission>
            }
          />
        </Route>
      </Route>

      <Route
        path="/forbidden"
        element={
          <ErrorPage
            title="Acesso negado!"
            message="Desculpe, mas talvez você não tenha permissão para acessar este recurso. Entre em contanto com o diácono do OANSE ou com o administrador do sistema para lhe dar a devida permissão."
          />
        }
      />

      <Route
        path="/unauthorized"
        element={
          <ErrorPage
            title="Acesso não autorizado!"
            message="Desculpe, mas você não forneceu suas credencias para acessar a aplicação. Volte para a página de login e entre com seu identificador e senha."
          />
        }
      />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
