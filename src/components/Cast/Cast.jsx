import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tmdAPI } from '../../utils/apiService';

// import PropTypes from 'prop-types'

const movieAPI = new tmdAPI();

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchActors() {
      setActors(await movieAPI.getActors(movieId));
    }

    fetchActors();
  }, [movieId]);

  if (!actors) return;

  // console.log('actors CAST :>> ', actors);

  return (
    <>
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
    </>
  );
};

// Cast.propTypes = {}

export default Cast;
