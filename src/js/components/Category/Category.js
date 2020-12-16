import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Category.scss';
import getTopNewsByCategory from '../../queries/getTopNewsByCategory';
import SliderContainer from '../../containers/SliderContainer/SliderContainer';

const Category = ({ country, category, onClick, setActiveCategory, key }) => {
    const [isOpen, setOpen] = useState(false);
    let { data } = getTopNewsByCategory(country, category, 5);
    const open = isOpen ? 'open' : 'closed';
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
                    key={key}
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
    key: PropTypes.any,
    onClick: PropTypes.func,
    country: PropTypes.string,
    category: PropTypes.string,
    setActiveCategory: PropTypes.func,
};

export default Category;
