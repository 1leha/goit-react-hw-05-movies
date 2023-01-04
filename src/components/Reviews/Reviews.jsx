import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tmdAPI } from '../../utils/apiService';

// import PropTypes from 'prop-types'

const movieAPI = new tmdAPI();

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  // movieAPI.getReviews(movieId).then(setReviews);
  useEffect(() => {
    movieAPI.getReviews(movieId).then(setReviews);
  }, []);

  return (
    <section>
      {reviews.length > 0 ? (
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
      ) : (
        <div>We have no reviews for this film yet.</div>
      )}
    </section>
  );
};

// Reviews.propTypes = {}

export default Reviews;
