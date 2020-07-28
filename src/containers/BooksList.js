import React from "react";
import { connect } from "react-redux";

const BooksList = () => {
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
        {props.books.map((book) => {
          <Book book={book} key={book.id} />;
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(BooksList);
