import React from 'react';
import { Box } from 'components/Box';

import PropTypes from 'prop-types';
import MovieGenres from 'components/MovieGenres';

const Card = ({
  movieDetales: { genres, title, posterPath, vote_average, overview },
}) => {
  const userScore = vote_average
    ? `${Math.round(vote_average * 10)}%`
    : 'No users votes';

  return (
    <>
      <Box display="flex" gridGap="20px">
        <Box
          width="200px"
          height="300px"
          overflow="hidden"
          objectFit="cover"
          flex="0 0 auto"
        >
          <img src={posterPath} alt={title} />
        </Box>
        <Box>
          <h2>{title}</h2>
          <p>User score: {userScore}</p>

          <h3>Overview</h3>
          <div>{overview}</div>

          <h4>Genres</h4>
          <MovieGenres genres={genres} />
        </Box>
      </Box>
    </>
  );
};

Card.propTypes = {
  movieDetales: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

export default Card;
