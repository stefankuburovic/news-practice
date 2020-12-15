import React, { useState } from 'react';
import Container from '../../containers/Container';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import './App.scss';

function App() {
    const [menuItem, setMenuItem] = useState('Top News');

    const [category, setActiveCategory] = useState('');
    const [country, setCountry] = useState('GB');
    const [article, getArticle] = useState('');

    const setActive = (menuItem) => {
        return setMenuItem(menuItem);
    };

    const setActiveCountry = (country) => {
        return setCountry(country);
    };

    const setActiveArticle = (article) => {
        return getArticle(article);
    };
    const activeMenuItem = menuItem.props !== undefined ? menuItem.props.values.text : menuItem;
    return (
        <div className="app">
            <h1>News</h1>
            <HeaderContainer
                active={activeMenuItem}
                country={country}
                setActive={setActive}
                setActiveArticle={setActiveArticle}
                setActiveCountry={setActiveCountry}
                setActiveCategory={setActiveCategory}
                isArticle={article !== ''}
            />
            <Container
                article={article}
                category={category}
                country={country}
                container={activeMenuItem}
                setActiveArticle={setActiveArticle}
                setActiveCategory={setActiveCategory}
            />
        </div>
    );
}

export default App;
