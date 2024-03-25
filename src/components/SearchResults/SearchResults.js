import React from 'react';
import PropTypes from 'prop-types';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = ({ searchResults, onAddTrack }) => {
  return (
    <div>
      <h2>Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAddTrack} />
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onAddTrack: PropTypes.func.isRequired,
};

export default SearchResults;

