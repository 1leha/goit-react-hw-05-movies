import FilmItem from '../FilmItem';
import React from 'react';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types'

const FilmList = ({ films, path = '' }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, title }) => {
        return (
          <FilmItem
            key={id}
            id={id}
            title={title}
            linkTo={`${path}${id}`}
            linkFrom={{ from: location }}
          />
        );
      })}
    </ul>
  );
};

// FilmList.propTypes = {}

export default FilmList;
