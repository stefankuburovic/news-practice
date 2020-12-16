import React from 'react';
import PropTypes from 'prop-types';
import './SearchContainer.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardContainer from '../CardContainer/CardContainer';
import { useSelector } from 'react-redux';

const SearchContainer = ({ country, onClick, keyword, setKeyword }) => {
    const searchedHeadlines = useSelector((state) => state.getBySearchTerm);
    const { loading, error, data } = searchedHeadlines;
    return (
        <div className="search-container">
            <SearchBar country={country} setKeyword={setKeyword} />
            {keyword.length > 3 && (
                <CardContainer
                    data={data}
                    loading={loading}
                    error={error}
                    status={status}
                    onClick={onClick}
                />
            )}
        </div>
    );
};

SearchContainer.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
    keyword: PropTypes.string,
    country: PropTypes.string,
    setKeyword: PropTypes.func,
};

export default SearchContainer;
