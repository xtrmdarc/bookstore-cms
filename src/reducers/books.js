import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (state, action) => {
  switch (action.key) {
    case CREATE_BOOK: {
      const newState = state.slice();
      newState.push(action.book);
      return newState;
    }
    case REMOVE_BOOK: {
      const newState = state.slice();
      newState.splice(action.bookId, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default booksReducer;
