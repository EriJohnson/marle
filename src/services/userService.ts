import axios from 'axios';
import { User } from 'types/User';

export default async function create(payload: Partial<User>) {
  const response = await axios.post<User>('/users', payload);
  return response;
}
