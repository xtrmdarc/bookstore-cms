export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const UPDATE ='UPDATE';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  bookId: book.id,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export const updateFromDatabase = booksArray =>({
  type: UPDATE,
  booksArray
})
