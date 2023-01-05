import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tmdAPI } from '../../utils/apiService';
import { renderMashineStatus } from '../../utils/options';

// import PropTypes from 'prop-types'

const movieAPI = new tmdAPI();

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState(renderMashineStatus.IDLE);

  useEffect(() => {
    setStatus(renderMashineStatus.IDLE);

    movieAPI.getActors(movieId).then(actors => {
      if (actors.length === 0) {
        setStatus(renderMashineStatus.EMPTY);
        return;
      }
      setStatus(renderMashineStatus.SUСCESS);
      setActors(actors);
    });
  }, [movieId]);

  if (status === renderMashineStatus.IDLE) return;

  if (status === renderMashineStatus.EMPTY) {
    return <div>We have no idea who starred in this movie.</div>;
  }

  if (status === renderMashineStatus.SUСCESS) {
    return (
      <ul>
        {actors.map(({ id, name, character, actorPhotoPath }) => {
          return (
            <li key={id}>
              <article>
                <img src={actorPhotoPath} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
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
