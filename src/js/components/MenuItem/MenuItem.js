import React from 'react';
import './MenuItem.scss';
import PropTypes from 'prop-types';

const MenuItem = ({ item, setActive, active, isArticle, setActiveArticle, setActiveCategory }) => {
    const activeContainer = () => {
        setActive(item);
        setActiveArticle('');
        setActiveCategory !== undefined && setActiveCategory('');
    };
    const activeMenuItem =
        item.props !== undefined
            ? item.props.values.text === active
                ? 'active'
                : 'inactive'
            : item === active
            ? 'active'
            : 'inactive';

    return (
        <button
            className={`menu-item ${activeMenuItem}`}
            onClick={activeContainer}
            disabled={isArticle}
        >
            {item}
        </button>
    );
};

MenuItem.propTypes = {
    item: PropTypes.string,
    active: PropTypes.string,
    setActive: PropTypes.func,
    isArticle: PropTypes.bool,
    setActiveArticle: PropTypes.func,
    setActiveCategory: PropTypes.func,
};
export default MenuItem;
