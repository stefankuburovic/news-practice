import React from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES } from '../../constants';
import Category from '../../components/Category/Category';
import './CategoriesContainer.scss';
import { FormattedMessage } from 'react-intl';

const CategoriesContainer = ({ country, onClick, setActiveCategory }) => {
    return (
        <div className="categories-container">
            <div className="categories-container_accordion">
                {CATEGORIES.map((category) => {
                    return (
                        <div className="single-category" key={category}>
                            <Category
                                country={country}
                                onClick={onClick}
                                category={category}
                                setActiveCategory={setActiveCategory}
                                categoryTitle={
                                    <FormattedMessage
                                        id={`category.${category}`}
                                        defaultMessage={`{text}`}
                                        values={{ text: category }}
                                    />
                                }
                            />
                        </div>
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
