import React from 'react';
import PropTypes from 'prop-types';
import getCategoryNews from '../../queries/getNewsByCategory';
import './CategoryContainer.scss';
import CardContainer from '../CardContainer/CardContainer';

const CategoryContainer = ({ country, category, onClick }) => {
    const { status, data } = getCategoryNews(country, category);
    return (
        <div className="category-container">
            <h2>{category}</h2>
            <CardContainer status={status} data={data} onClick={onClick} />
        </div>
    );
};
CategoryContainer.propTypes = {
    onClick: PropTypes.func,
    country: PropTypes.string,
    category: PropTypes.string,
};
export default CategoryContainer;
