import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <input type="text" name="search" />
      <button type="subbmit">Search</button>
    </form>
  );
};

SearchForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchForm;
