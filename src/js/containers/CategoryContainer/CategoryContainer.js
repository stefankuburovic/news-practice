import React from 'react';
import PropTypes from 'prop-types';
import './CategoryContainer.scss';
import CardContainer from '../CardContainer/CardContainer';
import { useSelector } from 'react-redux';

const CategoryContainer = ({ category, onClick }) => {
    const fetchedTopHeadlinesByCategory = useSelector((state) => state.topHeadlinesByCategory);
    const { loading, data } = fetchedTopHeadlinesByCategory;
    return (
        <div className="category-container">
            <h2>{category}</h2>
            {!loading && <CardContainer status={status} data={data} onClick={onClick} />}
        </div>
    );
};
CategoryContainer.propTypes = {
    onClick: PropTypes.func,
    country: PropTypes.string,
    category: PropTypes.string,
};
export default CategoryContainer;
