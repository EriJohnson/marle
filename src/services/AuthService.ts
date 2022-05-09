import Auth from 'types/Auth';
import HttpClient from './utils/HttpClient';

const baseURL = import.meta.env.VITE_BASE_API_URL;

class AuthService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(baseURL);
  }

  async login(payload: Auth) {
    const { data } = await this.httpClient.post('/auth/login', payload);

    const parsedToken = `Bearer ${data?.token}`;

    this.httpClient.axiosInstance.defaults.headers.common.Authorization =
      parsedToken;

    return data;
  }
}

export default new AuthService();
