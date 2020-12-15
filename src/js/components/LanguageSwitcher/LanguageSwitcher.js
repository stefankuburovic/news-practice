import React, { useContext } from 'react';
import { IntlContext } from '../../hoc/IntlContext';
import { LANGUAGES } from '../../constants';
import './LanguageSwitcher.scss';

const LanguageSwitch = () => {
    const { switchToEnglish, switchToDeutsch, locale } = useContext(IntlContext);
    return (
        <div className="menu-container language-switcher">
            <button
                className={`menu-item ${locale === 'en' ? 'active' : 'inactive'}`}
                onClick={switchToEnglish}
            >
                {LANGUAGES[0]}
            </button>
            <button
                className={`menu-item ${locale === 'de' ? 'active' : 'inactive'}`}
                onClick={switchToDeutsch}
            >
                {LANGUAGES[1]}
            </button>
        </div>
    );
};

export default LanguageSwitch;
