import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ActorsList from '../ActorsList';

import { tmdAPI } from '../../utils/apiService';
import { renderMashineStatus } from '../../utils/options';

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
    return <ActorsList actors={actors} />;
  }
};

export default Cast;
