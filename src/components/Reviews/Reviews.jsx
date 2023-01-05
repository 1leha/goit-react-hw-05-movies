import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tmdAPI } from '../../utils/apiService';
import { renderMashineStatus } from '../../utils/options';

// import PropTypes from 'prop-types'

const movieAPI = new tmdAPI();

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(renderMashineStatus.IDLE);

  useEffect(() => {
    setStatus(renderMashineStatus.IDLE);
    movieAPI.getReviews(movieId).then(reviews => {
      if (reviews.length === 0) {
        setStatus(renderMashineStatus.EMPTY);
        return;
      }
      setStatus(renderMashineStatus.SUСCESS);
      setReviews(reviews);
    });
  }, [movieId]);

  if (status === renderMashineStatus.IDLE) return;

  if (status === renderMashineStatus.EMPTY) {
    return <div>We have no reviews for this film yet.</div>;
  }

  if (status === renderMashineStatus.SUСCESS) {
    return (
      <section>
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
};

// Reviews.propTypes = {}

export default Reviews;
