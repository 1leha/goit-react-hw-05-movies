import React from 'react';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Home = ({ popularMovies }) => {
  const location = useLocation();
  return (
    <>
      <h2>Home</h2>
      <ul>
        {popularMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// Home.propTypes = {}

export default Home;
