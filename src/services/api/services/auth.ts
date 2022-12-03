import { User } from 'types/User';
import httpClient from '../httpClient';

export type LoggedUser = Pick<User, 'id' | 'fullName' | 'role' | 'club'>;

export interface ILoginRequest {
  identifier: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: LoggedUser;
}

const AuthService = {
  login: async (request: ILoginRequest) => {
    const { data } = await httpClient.post<ILoginResponse>(
      '/auth/login',
      request
    );

    httpClient.defaults.headers.common.authorization = `Bearer ${data.token}`;

    return data;
  },
};

export default AuthService;
