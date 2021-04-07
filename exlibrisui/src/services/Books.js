import api from '../utils/api';

export const listBooks = async () => {
  const response = await api.get('api/books');
  return response.data;
};
