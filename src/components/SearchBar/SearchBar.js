import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
  }, [onSearch, term]);

  return (
    <div className="search-bar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange} />
      <button className="search-button" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;


