import GlobalStyle from 'components/GlobalStyle';
import Layout from 'components/Layout/Layout';
import MovieDetails from 'components/MovieDetails';
import Home from 'components/Page/Home';
import Movie from 'components/Page/Movie';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { tmdAPI } from '../../utils/apiService';

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
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
          {/* <Route path="*" element={<Home popularMovies={popularMovies} />} /> */}
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
