import React from "react";
import PropTypes from "prop-types";

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { handleChange } = this.props;
    this.setState({[e.target.name]: e.target.value});
    handleChange(e.target.value);
  }

  render() {
    const { category } = this.state;
    const CATEGORIES = [
      "All",
      "Action",
      "Biography",
      "History",
      "Horror",
      "Kids",
      "Learning",
      "Sci-Fi",
    ];
    return (
      <label htmlFor="categories">
        Choose a category
        <select
          value={category}
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
    );
  }
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
