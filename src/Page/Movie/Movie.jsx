import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../../components/SearchForm';
import FilmList from '../../components/FilmList';

import { Container } from '../../components/Common/Common.styled';

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
    if (!query) return;
    movieAPI.searchMovie(query).then(setSearchResult);
  }, [query]);

  return (
    <Container>
      <h2>Find your movie</h2>
      <SearchForm onSubmit={handlerSubmit} />
      {searchResult.length > 0 && <FilmList films={searchResult} />}
    </Container>
  );
};

export default Movie;
