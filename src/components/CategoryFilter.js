import React from "react";

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: '' };
  }

  handleChange() {
    const { handleFilterChange } = this.props;
    handleFilterChange(this.state.category);
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

export default CategoryFilter;
