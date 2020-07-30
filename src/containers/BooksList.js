import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "../components/Book";
import { removeBook } from "../actions/index";
import CategoryFilter from "../components/CategoryFilter";

const BooksList = (props) => {
  const { books, removeBook } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <div>
      <CategoryFilter />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book
              book={book}
              key={book.id}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const matchDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, map: PropTypes.func })
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(BooksList);
