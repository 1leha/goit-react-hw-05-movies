import React, { useState } from 'react';
// import PropTypes from 'prop-types'

import { tmdAPI } from '../../utils/apiService';
const movieAPI = new tmdAPI();

const SearchForm = () => {
  const [value, setValue] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    // console.log('Subbmit', e.target.elements.search.value);
    movieAPI.searchMovie(searchQuery);
    setValue('');
  };

  const handlerChange = e => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handlerSubmit} autoComplete="off">
      <input type="text" name="search" value={value} onChange={handlerChange} />
      <button type="subbmit">Search</button>
    </form>
  );
};

// SearchForm.propTypes = {}

export default SearchForm;
