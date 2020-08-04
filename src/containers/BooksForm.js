import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = { title: '', category: 'Action' };
    this.state = this.defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const { createBook } = this.props;
    const { title, category } = this.state;
    if (title === '') return;

    const newBook = {
      id: parseInt(Math.random() * 1000, 10),
      title,
      category,
    };
    this.setState(this.defaultState);
    createBook(newBook);
  }

  loadBooks(){
    this.setState()
  }

  render() {
    const CATEGORIES = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
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
            name="category"
            id="categories"
            className="categoryInput"
            onChange={this.handleChange}
          >
            {CATEGORIES.map(cat => (
              <option value={cat} key={parseInt(Math.random() * 1000, 10)}>
                {cat}
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
