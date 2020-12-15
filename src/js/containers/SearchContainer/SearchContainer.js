import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchContainer.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardContainer from '../CardContainer/CardContainer';
import getSearch from '../../queries/getNewsBySearchTerm';

const SearchContainer = ({ country }) => {
    const [keyword, setKeyword] = useState('');
    const { status, data } = getSearch(country, keyword);

    return (
        <div className="search-container">
            <SearchBar setKeyword={setKeyword} />
            {keyword.length > 3 && <CardContainer data={data} status={status} />}
        </div>
    );
};

SearchContainer.propTypes = {
    onClick: PropTypes.func,
    country: PropTypes.string,
    children: PropTypes.any,
};

export default SearchContainer;
