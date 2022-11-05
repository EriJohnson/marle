import { User } from 'types/User';
import HttpClient from './utils/HttpClient';

const baseURL = import.meta.env.VITE_BASE_API_URL;

class AuthService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(baseURL);
  }

  async login(data: Partial<User>) {
    const response: any = await this.httpClient.post('/auth/login', data);
    this.httpClient.setAuthorization(response.token);

    return response;
  }
}

export default new AuthService();
