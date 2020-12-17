import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar/SearchBar';
import CardContainer from '../CardContainer/CardContainer';
import getSearch from '../../queries/getNewsBySearchTerm';
import './SearchContainer.scss';

const SearchContainer = ({ country, onClick }) => {
    const [keyword, setKeyword] = useState('');
    const { status, data } = getSearch(country, keyword);

    return (
        <div className="search-container">
            <SearchBar setKeyword={setKeyword} />
            {keyword.length > 3 && <CardContainer data={data} status={status} onClick={onClick} />}
        </div>
    );
};

SearchContainer.propTypes = {
    onClick: PropTypes.func,
    country: PropTypes.string,
    children: PropTypes.any,
};

export default SearchContainer;
