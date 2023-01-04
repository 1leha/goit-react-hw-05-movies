import React from 'react';
import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types'

const FilmItem = ({ title, linkTo, linkFrom }) => {
  return (
    <li>
      <NavLink to={linkTo} state={linkFrom}>
        {title}
      </NavLink>
    </li>
  );
};

// FilmItem.propTypes = {}

export default FilmItem;
