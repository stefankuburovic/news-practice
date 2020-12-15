import React, { useState } from 'react';
import Container from '../../containers/Container';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import './App.scss';
import { getTopHeadlines } from '../../store/actions/topHeadlinesActions';
import { useDispatch } from 'react-redux';

function App() {
    const [menuItem, setMenuItem] = useState('Top News');
    const dispatch = useDispatch();

    const [category, setActiveCategory] = useState('');
    const [country, setCountry] = useState('GB');
    const [article, getArticle] = useState({});

    dispatch(getTopHeadlines(country));
    const setActive = (menuItem) => {
        return setMenuItem(menuItem);
    };

    const setActiveCountry = (country) => {
        dispatch(getTopHeadlines(country));
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
                category={category}
                isArticle={isArticle}
                container={activeMenuItem}
                setActiveArticle={setActiveArticle}
                setActiveCategory={setActiveCategory}
            />
        </div>
    );
}

export default App;
