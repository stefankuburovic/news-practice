import React, { useState } from 'react';
import Container from '../../containers/Container';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import './App.scss';
import { getTopHeadlines } from '../../store/actions/topHeadlinesAction';
import { useDispatch } from 'react-redux';
import { getHeadlinesBySearchTerm } from '../../store/actions/topHeadlinesBySearchTermAction';
import { getTopHeadlinesByCategory } from '../../store/actions/topHeadlinesByCategoryAction';

function App() {
    const [menuItem, setMenuItem] = useState('Top News');
    const dispatch = useDispatch();

    const [category, setActiveCategory] = useState('');
    const [country, setCountry] = useState('GB');
    const [article, getArticle] = useState({});
    const [keyword, setKeyword] = useState('');

    dispatch(getTopHeadlines(country));
    const setActive = (menuItem) => {
        return setMenuItem(menuItem);
    };

    const setActiveCountry = (country) => {
        menuItem === 'Top News' && dispatch(getTopHeadlines(country));
        menuItem === 'Search' && dispatch(getHeadlinesBySearchTerm(country, keyword));
        menuItem === 'Categories' && dispatch(getTopHeadlinesByCategory(country, category));
        return setCountry(country);
    };

    const setActiveArticle = (article) => {
        return getArticle(article);
    };

    const activeMenuItem = menuItem.props !== undefined ? menuItem.props.values.text : menuItem;
    const isArticle = Object.keys(article).length > 0;
    return (
        <div className="app">
            <h1>News</h1>
            <HeaderContainer
                country={country}
                setActive={setActive}
                isArticle={isArticle}
                active={activeMenuItem}
                setActiveArticle={setActiveArticle}
                setActiveCountry={setActiveCountry}
                setActiveCategory={setActiveCategory}
            />
            <Container
                article={article}
                country={country}
                keyword={keyword}
                category={category}
                isArticle={isArticle}
                container={activeMenuItem}
                setKeyword={setKeyword}
                setActiveArticle={setActiveArticle}
                setActiveCategory={setActiveCategory}
            />
        </div>
    );
}

export default App;
