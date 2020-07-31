import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="left-menu">
        <span className="logo">Bookstore CMS</span>
        <span className="menu enabled">Books</span>
        <span className="menu">Categories</span>
      </div>
      <div className="right-menu">
        <span className="profile">Profile</span>
      </div>
    </header>
  );
}

export default Header;