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
      <div>
        <label htmlFor="title">
          Title
          {' '}
          <input
            value={title}
            id="title"
            name="title"
            type="text"
            onChange={this.handleChange}
          />
          {' '}
        </label>

        <label htmlFor="categories">
          Choose a category
          <select
            value={category}
            name="category"
            id="categories"
            onChange={this.handleChange}
          >
            {CATEGORIES.map(cat => (
              <option value={cat} key={parseInt(Math.random() * 1000, 10)}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <input type="submit" value="SUBMIT" onClick={this.handleSubmit} />
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
