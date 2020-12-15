import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import de from '../i18n/de';
import en from '../i18n/en';

const messages = {
    de: de,
    en: en,
};

const Context = React.createContext();
const language = navigator.language.split(/[-_]/)[0];

class IntlProviderWrapper extends Component {
    constructor(...args) {
        super(...args);

        this.switchToEnglish = () => this.setState({ locale: 'en', messages: en });
        this.switchToDeutsch = () => this.setState({ locale: 'de', messages: de });

        this.state = {
            locale: language,
            messages: messages[language],
            switchToEnglish: this.switchToEnglish,
            switchToDeutsch: this.switchToDeutsch,
        };
    }

    render() {
        const { children } = this.props;
        const { locale, messages, switchToEnglish, switchToDeutsch } = this.state;
        return (
            <Context.Provider value={this.state}>
                <IntlProvider
                    key={locale}
                    locale={locale}
                    messages={messages}
                    defaultLocale="en"
                    switchToEnglish={switchToEnglish}
                    switchToDeutsch={switchToDeutsch}
                >
                    {children}
                </IntlProvider>
            </Context.Provider>
        );
    }
}
IntlProviderWrapper.propTypes = {
    children: PropTypes.any,
};
export { IntlProviderWrapper, Context as IntlContext };
