/* eslint-disable react/jsx-key */
import { FormattedMessage } from 'react-intl';
import React from 'react';

export const MENU_ITEMS = [
    <FormattedMessage id="menu.topNews" defaultMessage="{text}" values={{ text: 'Top News' }} />,
    <FormattedMessage
        id="menu.categories"
        defaultMessage="{text}"
        values={{ text: 'Categories' }}
    />,
    <FormattedMessage id="menu.search" defaultMessage="{text}" values={{ text: 'Search' }} />,
];
export const LANGUAGES = [
    <FormattedMessage
        id="languageMenu.english"
        defaultMessage="{text}"
        values={{ text: 'English' }}
    />,
    <FormattedMessage
        id="languageMenu.german"
        defaultMessage="{text}"
        values={{ text: 'German' }}
    />,
];
export const COUNTRIES = ['GB', 'US'];
export const CATEGORIES = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
];
