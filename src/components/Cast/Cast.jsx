import React, { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tmdAPI } from '../../utils/apiService';

// import PropTypes from 'prop-types'

const movieAPI = new tmdAPI();

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');

  useLayoutEffect(() => {
    setStatus('idle');

    movieAPI.getActors(movieId).then(actors => {
      if (actors.length === 0) {
        setStatus('empty');
        return;
      }
      setStatus('suсcess');
      setActors(actors);
    });
  }, [movieId]);

  if (status === 'idle') return;

  if (status === 'empty') {
    return <div>We have no idea who starred in this movie.</div>;
  }

  if (status === 'suсcess') {
    return (
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
    );
  }
};

// Cast.propTypes = {}

export default Cast;
