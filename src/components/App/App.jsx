import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from '../GlobalStyle';

import Layout from '../Layout';

const Home = lazy(() => import('../../Page/Home'));
const Movie = lazy(() => import('../../Page/Movie'));
const MovieDetails = lazy(() => import('../../Page/MovieDetails'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

// import { Box } from 'components/Box';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
