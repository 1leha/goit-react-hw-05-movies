import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import FilmList from '../../components/FilmList';

import { tmdAPI } from '../../utils/apiService';
const movieAPI = new tmdAPI();

const Home = () => {
  // const location = useLocation();
  // console.log('location Home :>> ', location);

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      setPopularMovies(await movieAPI.getTrendingMovies());
    }

    fetchPopularMovies();
  }, []);

  return (
    <>
      <h2>Tranding today</h2>
      <FilmList films={popularMovies} path="movies/" />
    </>
  );
};

// Home.propTypes = {}

export default Home;
