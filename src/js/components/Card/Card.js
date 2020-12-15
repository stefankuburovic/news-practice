import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/all';
import dummyImage from '../../../assets/images/jpg/news.jpg';
import './Card.scss';

const Card = ({ title, urlToImage, onClick }) => {
    return (
        <div className="card-item">
            <div className="card-item_description">
                <h4>{title}</h4>
                <button onClick={() => onClick({ title })}>
                    <AiOutlineArrowRight color="white" />
                </button>
            </div>
            {urlToImage !== null ? (
                <img src={urlToImage} alt={title} className="card-item_image" />
            ) : (
                <img src={dummyImage} alt={title} className="card-item_image" />
            )}
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
