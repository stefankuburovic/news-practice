import React from 'react';
import PropTypes from 'prop-types';
import Category from '../../components/Category/Category';
import { CATEGORIES } from '../../constants';
import './CategoriesContainer.scss';

const CategoriesContainer = ({ country, onClick, setActiveCategory }) => {
    return (
        <div className="categories-container">
            <div className="categories-container_accordion">
                {CATEGORIES.map((category, key) => {
                    return (
                        <Category
                            key={key}
                            country={country}
                            onClick={onClick}
                            category={category}
                            setActiveCategory={setActiveCategory}
                        />
                    );
                })}
            </div>
        </div>
    );
};

CategoriesContainer.propTypes = {
    onClick: PropTypes.func,
    country: PropTypes.string,
    setActiveCategory: PropTypes.func,
};

export default CategoriesContainer;
