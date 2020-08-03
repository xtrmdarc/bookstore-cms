
const BooksApi = (() => {

  const endPoint = 'https://murmuring-savannah-86260.herokuapp.com/';

  const getBooks = () => {
    const resourceUrl = endPoint+'books/index';
    console.log(resourceUrl);
    return fetch(resourceUrl, {mode: 'cors' }).then(result => {
      result.json().then(data => {
        console.log(data);
      });
    });
  }
  
  return { getBooks };
})();

export default BooksApi;
