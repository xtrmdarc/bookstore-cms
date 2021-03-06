import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, handleRemoveBook } = props;
  const removeBook = () => {
    handleRemoveBook(book);
  };

  return (
    <div className="bookContainer">
      <div className="bookInfo">
        <span>{book.category}</span>
        <span className="bookTitle">{book.title}</span>
        <ul className="bookActions">
          <li>Comments</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="bookState">
        <span className="percentage">64%</span>
        <span className="statusInfo">Completed</span>
      </div>
      <div className="removeBook">
        <span className="currentBook">CURRENT CHAPTER</span>
        <span className="chapter">Chapter 17</span>
        <button className="removeBookButton" type="button" onClick={removeBook}>
          REMOVE BOOK
        </button>
      </div>
    </div>
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
