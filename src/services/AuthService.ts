import { User } from 'types/User';
import api from './utils/api';

export type LoggedUser = Pick<User, 'id' | 'fullName' | 'role' | 'club'>;

export interface ILoginResponse {
  token: string;
  user: LoggedUser;
}

export interface ILoginRequest {
  identifier: string;
  password: string;
}

export async function login(payload: ILoginRequest) {
  const { data } = await api.post<ILoginResponse>('/auth/login', payload);

  api.defaults.headers.common.authorization = `Bearer ${data.token}`;

  return data;
}
