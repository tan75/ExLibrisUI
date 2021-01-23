import { GET_BOOKS } from '../types';

const initialState = {
  books: [],
  inputValue: '',
};

export default function (state = initialState, action) {
  console.log('000 ', JSON.stringify(state));
  console.log('776 action ', action);
  switch (action.type) {
    case GET_BOOKS:
      console.log('888 ', action.payload);
      console.log('9988 new state obj ', {
        ...state,
        books: action.payload,
        inputValue: '',
      });
      return {
        ...state,
        books: action.payload,
        inputValue: '',
      };
    default:
      return state;
  }
}
