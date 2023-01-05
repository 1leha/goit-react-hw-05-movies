import React from 'react';
import PropTypes from 'prop-types';

const MovieGenres = ({ genres }) => {
  if (!genres) return;
  const movieGeners = genres.map(({ name }) => name).join(', ');

  return <div>{movieGeners}</div>;
};

MovieGenres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default MovieGenres;
