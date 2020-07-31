import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const newState = state.slice();
      newState.push(action.book);
      return newState;
    }
    case REMOVE_BOOK: {
      let newState = state.slice();
      newState = newState.filter(book => book.id !== action.bookId);
      return newState;
    }
    default:
      return state;
  }
};

export default booksReducer;
