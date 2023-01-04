import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tmdAPI } from '../../utils/apiService';

// import PropTypes from 'prop-types'

const movieAPI = new tmdAPI();

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useLayoutEffect(() => {
    async function fetchActors() {
      setActors(await movieAPI.getActors(movieId));
    }

    fetchActors();
  }, [movieId]);

  if (actors.length === 0) return;

  return (
    <>
      {actors.length > 0 ? (
        <ul>
          {actors.map(({ id, name, character, actorPhotoPath }) => {
            return (
              <li key={id}>
                <article>
                  <img src={actorPhotoPath} alt={name} />
                  <p>{name}</p>
                  <p>{character}</p>
                </article>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>We have no idea who starred in this movie.</div>
      )}
    </>
  );
};

// Cast.propTypes = {}

export default Cast;
