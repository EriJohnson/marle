import { User } from 'types/User';
import httpClient from '../httpClient';

const UsersService = {
  create: async (request: Partial<User>) => {
    const response = await httpClient.post<User>('/users', request);
    return response;
  },
};

export default UsersService;
