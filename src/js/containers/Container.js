import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from './CardContainer/CardContainer';
import SearchContainer from './SearchContainer/SearchContainer';
import ArticleContainer from './ArticleContainer/ArticleContainer';
import CategoriesContainer from './CategoriesContainer/CategoriesContainer';
import './Container.scss';
import CategoryContainer from './CategoryContainer/CategoryContainer';
import getTopNews from '../queries/getTopNews';

const Container = ({
    container,
    article,
    category,
    country,
    setActiveArticle,
    setActiveCategory,
}) => {
    let content;
    const { status, data } = getTopNews(country);

    switch (container) {
        case 'Top News':
            content = (
                <CardContainer
                    onClick={setActiveArticle}
                    country={country}
                    status={status}
                    data={data}
                />
            );
            break;
        case 'Categories':
            content = (
                <CategoriesContainer
                    onClick={setActiveArticle}
                    country={country}
                    category={category}
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
            {article.length > 0 ? (
                <ArticleContainer onClick={setActiveArticle} />
            ) : category.length > 0 ? (
                <CategoryContainer
                    country={country}
                    onClick={setActiveArticle}
                    category={category}
                />
            ) : (
                content
            )}
        </div>
    );
};

Container.propTypes = {
    article: PropTypes.string,
    category: PropTypes.string,
    keyword: PropTypes.string,
    country: PropTypes.string,
    container: PropTypes.string,
    setActiveArticle: PropTypes.func,
    setActiveCategory: PropTypes.func,
};

export default Container;
