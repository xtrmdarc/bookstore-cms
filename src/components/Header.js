import React from 'react';
import booksApi from '../Api/booksApi';

const Header = () => {
  const fetchHandler = () => {
    booksApi.getBooks();
  };

  return (
    <header>
      <div className="left-menu">
        <span className="logo">Bookstore CMS</span>
        <span className="menu enabled">Books</span>
        <span className="menu">Categories</span>
      </div>
      <div className="right-menu">
        <span onClick={fetchHandler} className="profile">Profile</span>
      </div>
    </header>
  );
}

export default Header;
