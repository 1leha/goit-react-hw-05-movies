import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types'

import SearchForm from '../../components/SearchForm';
import FilmList from '../../components/FilmList';

const Movie = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <>
      <SearchForm />
      {searchResult.length > 0 && <FilmList films={searchResult} />}
    </>
  );
};

// Movie.propTypes = {}

export default Movie;
