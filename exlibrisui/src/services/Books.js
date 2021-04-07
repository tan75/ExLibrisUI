import api from '../utils/api';

export const listBooks = async () => {
  const response = await api.fetch('books');
  console.log(response.data);
  return response.data;
};

export const addBook = '';
