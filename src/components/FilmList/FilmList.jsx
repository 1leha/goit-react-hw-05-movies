import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types'

const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <NavLink to={`${id}`} state={{ from: location }}>
              {original_title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

// FilmList.propTypes = {}

export default FilmList;
