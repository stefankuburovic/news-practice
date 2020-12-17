import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';

const Menu = ({
    items,
    position,
    setActive,
    active,
    isArticle,
    setActiveArticle,
    setActiveCategory,
}) => {
    return (
        <div className={`menu-container ${position}`}>
            {items.map((value, key) => {
                return (
                    <MenuItem
                        key={key}
                        item={value}
                        active={active}
                        isArticle={isArticle}
                        setActive={setActive}
                        setActiveArticle={setActiveArticle}
                        setActiveCategory={setActiveCategory}
                    />
                );
            })}
        </div>
    );
};

Menu.propTypes = {
    items: PropTypes.array,
    active: PropTypes.string,
    setActive: PropTypes.func,
    isArticle: PropTypes.bool,
    position: PropTypes.string,
    setActiveArticle: PropTypes.func,
    setActiveCategory: PropTypes.func,
};

export default Menu;
