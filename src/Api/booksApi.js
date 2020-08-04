import axios from 'axios'
const BooksApi = (() => {
  //'https://murmuring-savannah-86260.herokuapp.com/'
  const start = 'https://murmuring-savannah-86260.herokuapp.com/'
  const index = start + 'books/index';

  const getBooks = () => {
    return new Promise((resolve, reject)=> {
        axios
      .get(index)
      .then(data => {
         resolve(data.data.books)
      });
    });
  }

  return { getBooks };
})();

export default BooksApi;
