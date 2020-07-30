import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, map: PropTypes.func }))
    .isRequired,
};

export default connect(mapStateToProps)(BooksList);
