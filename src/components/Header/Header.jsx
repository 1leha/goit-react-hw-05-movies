import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <NavLink to="/" state={{ from: location }}>
          Home
        </NavLink>
        <NavLink to="movies">Movie</NavLink>
      </nav>
    </header>
  );
};

export default Header;
