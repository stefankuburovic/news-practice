import React from 'react';
import PropTypes from 'prop-types';
import './ArticleContainer.scss';

const ArticleContainer = ({ onClick }) => {
    return (
        <div className="article-container">
            <h2 className="article-container_title">
                Florida Gators hoops star Keyontae Johnson in critical but stable condition after
                collapsing on court - CNN
            </h2>
            <div className="article-container_description"></div>
            <a href="#" onClick={() => onClick('')}>
                Back to list
            </a>
        </div>
    );
};
ArticleContainer.propTypes = {
    onClick: PropTypes.func,
};
export default ArticleContainer;
