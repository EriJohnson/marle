import { User } from 'types/User';
import HttpClient from './utils/HttpClient';

const baseURL = import.meta.env.VITE_BASE_API_URL;

class UsersService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(baseURL);
  }

  async create(data: Partial<User>) {
    const response = await this.httpClient.post('/users', data);
    return response;
  }

  async findAll() {
    const response = await this.httpClient.get('/users');
    return response;
  }

  async findOne(id: string) {
    const response = await this.httpClient.get(`/users/${id}`);
    return response;
  }

  async update(id: string, data: Partial<User>) {
    const response = await this.httpClient.patch(`/users/${id}`, data);
    return response;
  }

  async remove(id: string) {
    return this.httpClient.delete(`/users/${id}`);
  }
}

export default new UsersService();
