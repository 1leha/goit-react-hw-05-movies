import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const FilmItem = ({ title, linkTo, linkFrom }) => {
  return (
    <li>
      <NavLink to={linkTo} state={linkFrom}>
        {title}
      </NavLink>
    </li>
  );
};

FilmItem.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  linkFrom: PropTypes.shape({
    from: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.any,
      key: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default FilmItem;
