import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import BooksApi from '../Api/booksApi';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = { title: '', category_id: 1 };
    this.state = this.defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const { createBook } = this.props;
    const { title, category_id } = this.state;
    if (title === '') return;
  
    const newBook = {
      // id: parseInt(Math.random() * 1000, 10),
      title,
      category_id,
    };
    this.setState(this.defaultState);
    BooksApi.addBook(newBook)
      .then(data => {
        createBook(data.data.data);
      }); 
  }

  loadBooks(){
    this.setState()
  }

  render() {
    const CATEGORIES = [
      {id: 1,name: 'Action'},
      {id: 2, name: 'Horror'},
      {id: 3, name: 'History'},
      {id: 4, name: 'Learning'},
      {id: 5, name: 'Sci-Fi'},
      {id: 6, name: 'Romance'},
      {id: 7, name: 'Biography'},
      {id: 8, name: 'Kids'},
      {id: 9, name: 'Thriller'},
    ];

    const { title, category } = this.state;
    return (
      <div className="newBookForm">
        <h3>ADD NEW BOOK</h3>
        <div className="newBook">
          <input
            value={title}
            id="title"
            name="title"
            type="text"
            placeholder="Book Title"
            className="titleInput"
            onChange={this.handleChange}
          />

          <select
            value={category}
            name="category_id"
            id="categories"
            className="categoryInput"
            onChange={this.handleChange}
          >
            {CATEGORIES.map(cat => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <input className="submitButton" type="submit" value="SUBMIT" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, matchDispatchToProps)(BooksForm);
