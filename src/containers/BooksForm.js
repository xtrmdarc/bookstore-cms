import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      category: '',
     };
  }

  render() {
    const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
    return (
      <div>
        <label htmlFor="title"> Title </label>
        <input id="title" type="text" />
        <label htmlFor="categories"> Choose a category </label>
        <select name="categories" id="categories">
          {CATEGORIES.map((cat, index) => <option value={cat} key={index}>{cat}</option>)}
        </select>
        <input type="submit" value="SUBMIT"/>
      </div>
    );
  }
}
 
export default BooksForm;