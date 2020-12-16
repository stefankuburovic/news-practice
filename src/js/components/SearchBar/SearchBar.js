import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getHeadlinesBySearchTerm } from '../../store/actions/topHeadlinesBySearchTermAction';
import './SearchBar.scss';

const SearchBar = ({ country, setKeyword }) => {
    const dispatch = useDispatch();
    return (
        <div className="search-container">
            <div className="search-container_searchbar">
                <input
                    type="text"
                    className="input"
                    placeholder="Start search..."
                    onChange={(e) => {
                        setKeyword(e.target.value);
                        dispatch(getHeadlinesBySearchTerm(country, e.target.value));
                    }}
                />
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    country: PropTypes.string,
    setKeyword: PropTypes.func,
};

export default SearchBar;
