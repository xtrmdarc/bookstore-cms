
const BooksApi = (() => {

  const endPoint = 'https://salty-plateau-43720.herokuapp.com/';

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
