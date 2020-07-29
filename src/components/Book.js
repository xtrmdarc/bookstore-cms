import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, handleRemoveBook } = props;
  const removeBook = () => {
    handleRemoveBook(book);
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={removeBook}>Remove Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
