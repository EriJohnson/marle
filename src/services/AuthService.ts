import { Auth } from 'types/Auth';
import HttpClient from './utils/HttpClient';

const baseURL = import.meta.env.VITE_BASE_API_URL;

class AuthService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(baseURL);
  }

  async login(data: Auth) {
    const response = await this.httpClient.post('/auth/login', data);
    return response;
  }
}

export default new AuthService();
