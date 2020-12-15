import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ setKeyword }) => {
    return (
        <div className="search-container">
            <div className="search-container_searchbar">
                <input
                    type="text"
                    className="input"
                    placeholder="Start search..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    setKeyword: PropTypes.func,
};

export default SearchBar;
