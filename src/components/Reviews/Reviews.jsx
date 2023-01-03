import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tmdAPI } from '../../utils/apiService';

// import PropTypes from 'prop-types'

const movieAPI = new tmdAPI();

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      setReviews(await movieAPI.getReviews(movieId));
    }

    fetchReviews();
  }, [movieId]);

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
        'We have no reviews for this film yet.'
      )}
    </section>
  );
};

// Reviews.propTypes = {}

export default Reviews;
