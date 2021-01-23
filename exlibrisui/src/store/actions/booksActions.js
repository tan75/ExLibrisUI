import axios from 'axios';
import { GET_BOOKS, BOOKS_ERROR } from '../types';

const baseUrl = `http://localhost:8000`; // For Dev
// const baseUrl = `https://gobananas.work`; // For Prod https://gobananas.work/api/books

export const getBooks = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/api/books/`);
    // console.log('999 get book action is working ', res.data.books);
    console.log('999 actions payload => ', JSON.stringify(res.data.books));
    dispatch({
      type: GET_BOOKS,
      payload: res.data.books,
    });
  } catch (e) {
    dispatch({
      type: BOOKS_ERROR,
      payload: console.log('Err1 ', e),
    });
  }
};
