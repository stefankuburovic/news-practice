import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ title, description, urlToImage, onClick }) => {
    return (
        <div className="card-item">
            <div className="card-item_description">
                <h4>{title}</h4>
                <p>{description}</p>
                <button onClick={() => onClick('1')}>More</button>
            </div>
            <img src={urlToImage} alt={title} className="card-item_image" />
        </div>
    );
};

Card.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    source: PropTypes.object,
    author: PropTypes.string,
    urlToImage: PropTypes.string,
    description: PropTypes.string,
};

export default Card;
