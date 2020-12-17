import React from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../CardContainer/CardContainer';
import getTopNewsByCategory from '../../queries/getTopNewsByCategory';
import './CategoryContainer.scss';

const CategoryContainer = ({ country, category, categoryTitle, onClick }) => {
    const { status, data } = getTopNewsByCategory(country, category);
    return (
        <div className="category-container">
            <h2>{categoryTitle}</h2>
            <CardContainer status={status} data={data} onClick={onClick} />
        </div>
    );
};
CategoryContainer.propTypes = {
    onClick: PropTypes.func,
    country: PropTypes.string,
    category: PropTypes.string,
    categoryTitle: PropTypes.object,
};
export default CategoryContainer;
