import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "../components/Book";
import { removeBook, changeFilter } from "../actions/index";
import CategoryFilter from "../components/CategoryFilter";

const BooksList = (props) => {
  const { books, removeBook, changeFilter } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  return (
    <div>
      <CategoryFilter handleChange={handleFilterChange} />
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
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  }
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, map: PropTypes.func })
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(BooksList);
