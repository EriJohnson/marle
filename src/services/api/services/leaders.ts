import { User } from 'types/User';
import httpClient from '../httpClient';

const LeadersService = {
  findAll: async () => {
    const response = await httpClient.get<User[]>('/users/role/leader');
    return response.data;
  },
};

export default LeadersService;
