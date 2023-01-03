import React from 'react';
import { Box } from 'components/Box';

// import PropTypes from 'prop-types'

const Card = ({
  movieDetales: { genres, id, title, posterPath, vote_average, overview },
}) => {
  const userScore = vote_average
    ? `${Math.round(vote_average * 10)}%`
    : 'No users votes';

  if (!genres) return;
  const movieGeners = genres.map(({ name }) => name).join(', ');
  return (
    <>
      <Box display="flex" gridGap="20px">
        <Box width="200px" height="300px" overflow="hidden" objectFit="cover">
          <img src={posterPath} alt={title} />
        </Box>
        <Box>
          <h2>{title}</h2>
          <div>
            <p>User score: {userScore}</p>
            <h3>Overview</h3>
            <div>{overview}</div>
            <h3>Genres</h3>
            <div>{movieGeners}</div>
          </div>
        </Box>
      </Box>{' '}
    </>
  );
};

// Card.propTypes = {}

export default Card;
