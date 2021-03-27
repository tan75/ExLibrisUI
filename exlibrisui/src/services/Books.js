import api from '../utils/api';

export const listBooks = async () => {
  const response = await api.get('api/books');
  console.log(response.data);
  return response.data;
};
