import axios from 'axios'
const BooksApi = (() => {
  //'https://murmuring-savannah-86260.herokuapp.com/'
  const start = 'http://localhost:3001/'
  const index = start + 'books/index';
  const addBookUrl = start + 'books/create';
  const removeBookUrl = start + 'books/destroy';

  const getBooks = () => {
    return new Promise((resolve, reject)=> {
      axios
      .get(index)
      .then(data => {
        resolve(data.data.books)
      });
    });
  }

  const addBook = (book) => {
    return new Promise((resolve, reject) => {
      axios.post(addBookUrl, book)
        .then(result => resolve(result));
    });
  }

  const removeBook = (bookId) => {
    return new Promise((resolve, reject) => {
      axios.delete(`${removeBookUrl}/${bookId}`)
      .then( result => resolve(result));
    });
  }

  return { getBooks, addBook, removeBook };
})();

export default BooksApi;
