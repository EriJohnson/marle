import { User } from 'types/User';
import HttpClient from './utils/HttpClient';

const baseURL = import.meta.env.VITE_BASE_API_URL;

interface IAuthServiceData {
  token: string;
  user: Partial<User>;
}

class AuthService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(baseURL);
  }

  async login(payload: Partial<User>) {
    const { data }: { data: IAuthServiceData } = await this.httpClient.post(
      '/auth/login',
      payload
    );

    this.httpClient.setAuthorization(data.token);

    return data;
  }
}

export default new AuthService();
