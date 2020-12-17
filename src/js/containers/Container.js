import React from 'react';
import PropTypes from 'prop-types';

import getTopNews from '../queries/getTopNews';
import CardContainer from './CardContainer/CardContainer';
import SearchContainer from './SearchContainer/SearchContainer';
import ArticleContainer from './ArticleContainer/ArticleContainer';
import CategoryContainer from './CategoryContainer/CategoryContainer';
import CategoriesContainer from './CategoriesContainer/CategoriesContainer';
import './Container.scss';

const Container = ({
    country,
    article,
    category,
    container,
    setActiveArticle,
    setActiveCategory,
}) => {
    let content;
    const { status, data } = getTopNews(country);

    switch (container) {
        case 'Top News':
            content = (
                <CardContainer
                    data={data}
                    status={status}
                    country={country}
                    onClick={setActiveArticle}
                />
            );
            break;
        case 'Categories':
            content = (
                <CategoriesContainer
                    country={country}
                    category={category}
                    onClick={setActiveArticle}
                    setActiveCategory={setActiveCategory}
                />
            );
            break;
        case 'Search':
            content = <SearchContainer country={country} onClick={setActiveArticle} />;
            break;
        default:
            content = <CardContainer country={country} onClick={setActiveArticle} />;
    }
    return (
        <div className="container">
            {Object.keys(article).length > 0 ? (
                <ArticleContainer onClick={setActiveArticle} country={country} article={article} />
            ) : category.length > 0 ? (
                <CategoryContainer
                    country={country}
                    category={category}
                    onClick={setActiveArticle}
                />
            ) : (
                content
            )}
        </div>
    );
};

Container.propTypes = {
    article: PropTypes.object,
    keyword: PropTypes.string,
    country: PropTypes.string,
    isArticle: PropTypes.bool,
    category: PropTypes.string,
    container: PropTypes.string,
    setActiveArticle: PropTypes.func,
    setActiveCategory: PropTypes.func,
};

export default Container;
