import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../../components/SearchForm';
import FilmList from '../../components/FilmList';

import { tmdAPI } from '../../utils/apiService';

const movieAPI = new tmdAPI();

const Movie = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handlerSubmit = e => {
    e.preventDefault();

    const searchQuery = e.target.elements.search.value.trim().toLowerCase();

    setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});

    e.target.reset();
  };

  useEffect(() => {
    async function fetchSearchingMovies(query) {
      setSearchResult(await movieAPI.searchMovie(query));
    }

    query && fetchSearchingMovies(query);
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={handlerSubmit} />
      {searchResult.length > 0 && <FilmList films={searchResult} />}
    </>
  );
};

export default Movie;
