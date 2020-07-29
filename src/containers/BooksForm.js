import React from "react";
import { createBook } from "../actions/index";
import { connect } from "react-redux";

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", category: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    const newBook = {
      id: parseInt(Math.random() * 1000, 10),
      title: this.state.title,
      category: this.state.category,
    };
    createBook(newBook);
  }

  render() {
    const CATEGORIES = [
      "Action",
      "Biography",
      "History",
      "Horror",
      "Kids",
      "Learning",
      "Sci-Fi",
    ];
    return (
      <div>
        <label htmlFor="title">
          Title{" "}
          <input
            value={this.state.title}
            id="title"
            name="title"
            type="text"
            onChange={this.handleChange}
          />{" "}
        </label>

        <label htmlFor="categories">
          Choose a category
          <select
            value={this.state.category}
            name="category"
            id="categories"
            onChange={this.handleChange}
          >
            {CATEGORIES.map((cat) => (
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

const matchDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, matchDispatchToProps)(BooksForm);
