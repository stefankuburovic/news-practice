import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../../components/Menu/Menu';
import { MENU_ITEMS, COUNTRIES } from '../../constants';
import LanguageSwitch from '../../components/LanguageSwitcher/LanguageSwitcher';
import './HeaderContainer.scss';

const HeaderContainer = ({
    active,
    country,
    isArticle,
    setActive,
    setActiveCountry,
    setActiveArticle,
    setActiveCategory,
}) => {
    return (
        <div className="header-container">
            <Menu
                position="left"
                active={active}
                items={MENU_ITEMS}
                setActive={setActive}
                setActiveArticle={setActiveArticle}
                setActiveCategory={setActiveCategory}
            />
            <LanguageSwitch />
            <Menu
                position="right"
                active={country}
                items={COUNTRIES}
                isArticle={isArticle}
                setActive={setActiveCountry}
                setActiveArticle={setActiveArticle}
            />
        </div>
    );
};
HeaderContainer.propTypes = {
    active: PropTypes.string,
    setActive: PropTypes.func,
    country: PropTypes.string,
    isArticle: PropTypes.bool,
    setActiveCountry: PropTypes.func,
    setActiveArticle: PropTypes.func,
    setActiveCategory: PropTypes.func,
};
export default HeaderContainer;
