import React from 'react';
import PropTypes from 'prop-types';
import './ArticleContainer.scss';
import { FormattedMessage } from 'react-intl';
import getSearch from '../../queries/getNewsBySearchTerm';
import dummyImage from '../../../assets/images/jpg/news.jpg';
import { BsDot, IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/all';

const ArticleContainer = ({ onClick, country, article }) => {
    const { data } = getSearch(country, article.title);
    console.log(article.title, data);
    let { title, content, urlToImage, author, url } =
        (data !== undefined && data.articles.length > 0 && data.articles[0]) || '';

    return (
        <div className="article-container">
            <div className="article-container_title-section">
                <h2 className="article-container_title">
                    <span>
                        {title} <BsDot fontSize={32} style={{ verticalAlign: 'middle' }} />{' '}
                        <span className="author">{author}</span>
                    </span>
                </h2>
                {urlToImage !== null ? (
                    <img src={urlToImage} alt={title} className="article-container_header-image" />
                ) : (
                    <img src={dummyImage} alt={title} className="article-container_header-image" />
                )}
            </div>
            <div className="article-container_content">
                <p dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="article-container_footer">
                <a href="#" onClick={() => onClick({})}>
                    <span>
                        <IoMdArrowRoundBack fontSize="40" color="#bb1919" />
                    </span>
                    <span>
                        <FormattedMessage
                            id="article.backLink"
                            values="{text}"
                            defaultMessage={{ text: 'Back' }}
                        />
                    </span>
                </a>
                <a href={url} target="_blank" rel="noreferrer">
                    <span>
                        <FormattedMessage
                            id="article.fullArticle"
                            values="{text}"
                            defaultMessage={{ text: 'Full Article' }}
                        />
                    </span>
                    <span>
                        <IoMdArrowRoundForward fontSize="40" color="#bb1919" />
                    </span>
                </a>
            </div>
        </div>
    );
};
ArticleContainer.propTypes = {
    onClick: PropTypes.func,
    country: PropTypes.string,
    article: PropTypes.object,
};
export default ArticleContainer;
