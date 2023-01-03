import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { tmdAPI } from '../../utils/apiService';
import GlobalStyle from '../GlobalStyle';

import Layout from '../Layout';
import Home from '../../Page/Home';
import Movie from '../../Page/Movie';
import MovieDetails from '../../Page/MovieDetails';
import Cast from '../Cast';
import Reviews from '../Reviews';

const movieAPI = new tmdAPI();

// import { Box } from 'components/Box';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    async function fetch() {
      setPopularMovies(await movieAPI.getTrendingMovies());
    }

    fetch();
  }, []);

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home popularMovies={popularMovies} />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home popularMovies={popularMovies} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
