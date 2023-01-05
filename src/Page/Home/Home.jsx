import React, { useState, useEffect } from 'react';

import FilmList from '../../components/FilmList';

import { Container } from '../../components/Common/Common.styled';

import { tmdAPI } from '../../utils/apiService';
const movieAPI = new tmdAPI();

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      setPopularMovies(await movieAPI.getTrendingMovies());
    }

    fetchPopularMovies();
  }, []);

  return (
    <Container>
      <h2>Tranding today</h2>
      <FilmList films={popularMovies} path="movies/" />
    </Container>
  );
};

export default Home;
