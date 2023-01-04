import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tmdAPI } from '../../utils/apiService';

// import PropTypes from 'prop-types'

const movieAPI = new tmdAPI();

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('idle');
    movieAPI.getReviews(movieId).then(reviews => {
      if (reviews.length === 0) {
        setStatus('empty');
        return;
      }
      setStatus('suсcess');
      setReviews(reviews);
    });
  }, [movieId]);

  if (status === 'idle') return;

  if (status === 'empty') {
    return <div>We have no reviews for this film yet.</div>;
  }

  if (status === 'suсcess') {
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
