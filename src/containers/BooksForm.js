import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <div>
        <label htmlFor="title">
          Title
          {' '}
          <input id="title" type="text" />
          {' '}
        </label>

        <label htmlFor="categories">
          Choose a category
          <select name="categories" id="categories">
            {CATEGORIES.map(cat => (
              <option value={cat} key={parseInt(Math.random() * 1000, 10)}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <input type="submit" value="SUBMIT" />
      </div>
    );
  }
}

export default BooksForm;
