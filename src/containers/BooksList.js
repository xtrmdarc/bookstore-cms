import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter, updateFromDatabase } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import BooksApi from '../Api/booksApi';


class BooksList extends React.Component{
  constructor(props){
    super(props)
    this.handleRemoveBook = this.handleRemoveBook.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleRemoveBook(book){
    const {removeBook} = this.props;
    removeBook(book);
  };

  handleFilterChange(filter){
    const {changeFilter} = this.props;
    changeFilter(filter);
  };

  componentDidMount(){
    const {updateFromDatabase} = this.props;
    BooksApi.getBooks().then((result) => {
      updateFromDatabase(result)
    });
    
  }

  render(){
    const {books, filter} = this.props;
    console.log(books);
    return (
      <div className="listBookTableContainer">
        <CategoryFilter handleChange={this.handleFilterChange} />
        <table className="bookListTable">
          <tbody>
            
            {books.filter(book => book.category_name === filter || filter === "All")
              .map(book => (
                <Book
                  book={book}
                  key={book.id}
                  handleRemoveBook={this.handleRemoveBook}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  } 
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const matchDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
  updateFromDatabase: books =>{
    dispatch(updateFromDatabase(books))
  }
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, map: PropTypes.func }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(BooksList);
