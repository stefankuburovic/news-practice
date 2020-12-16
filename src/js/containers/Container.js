import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CardContainer from './CardContainer/CardContainer';
import SearchContainer from './SearchContainer/SearchContainer';
import ArticleContainer from './ArticleContainer/ArticleContainer';
import CategoryContainer from './CategoryContainer/CategoryContainer';
import CategoriesContainer from './CategoriesContainer/CategoriesContainer';
import './Container.scss';

const Container = ({
    country,
    article,
    keyword,
    category,
    container,
    setKeyword,
    setActiveArticle,
    setActiveCategory,
}) => {
    let content;

    const fetchedTopHeadlines = useSelector((state) => state.topHeadlines);
    switch (container) {
        case 'Top News':
            const { loading, error, data } = fetchedTopHeadlines;
            content = (
                <CardContainer
                    loading={loading}
                    error={error}
                    data={data}
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
            content = (
                <SearchContainer
                    country={country}
                    onClick={setActiveArticle}
                    keyword={keyword}
                    setKeyword={setKeyword}
                />
            );
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
    country: PropTypes.string,
    isArticle: PropTypes.bool,
    keyword: PropTypes.string,
    category: PropTypes.string,
    setKeyword: PropTypes.func,
    container: PropTypes.string,
    setActiveArticle: PropTypes.func,
    setActiveCategory: PropTypes.func,
};
export default Container;
