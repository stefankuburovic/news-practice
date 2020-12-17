import React, { useState } from 'react';
import PropTypes from 'prop-types';

import getTopNewsByCategory from '../../queries/getTopNewsByCategory';
import SliderContainer from '../../containers/SliderContainer/SliderContainer';
import './Category.scss';

const Category = ({ country, category, onClick, setActiveCategory }) => {
    const [isOpen, setOpen] = useState(false);

    const open = isOpen ? 'open' : 'closed';
    let { data } = getTopNewsByCategory(country, category, 5);
    return (
        <div className="category-container">
            <h3
                className={`category-container_title ${open}`}
                onClick={() => {
                    setOpen(!isOpen);
                }}
            >
                {category}
                <span className="arrow" />
            </h3>
            <div className={`category-container_description ${open}`}>
                <SliderContainer
                    data={data}
                    country={country}
                    onClick={onClick}
                    category={category}
                    setActiveCategory={setActiveCategory}
                />
            </div>
        </div>
    );
};

Category.propTypes = {
    onClick: PropTypes.func,
    country: PropTypes.string,
    category: PropTypes.string,
    setActiveCategory: PropTypes.func,
};

export default Category;
