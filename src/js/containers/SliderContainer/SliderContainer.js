import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import { SLIDER_SETTINGS } from '../../constants/slider';

import './SliderContainer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FormattedMessage } from 'react-intl';

const SliderContainer = ({ category, onClick, categoryTitle, setActiveCategory, data }) => {
    return (
        <div className="slider-container">
            <h2 onClick={() => setActiveCategory(category)}>
                <FormattedMessage
                    id={`category.moreOf`}
                    defaultMessage={`{text}`}
                    values={{ text: category }}
                />{' '}
                {categoryTitle}
            </h2>
            <Slider {...SLIDER_SETTINGS}>
                {data !== undefined &&
                    data.articles.map((value, key) => {
                        return (
                            <Card
                                key={key}
                                title={value.title}
                                urlToImage={value.urlToImage}
                                onClick={onClick}
                            />
                        );
                    })}
            </Slider>
        </div>
    );
};

SliderContainer.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
    country: PropTypes.string,
    category: PropTypes.string,
    categoryTitle: PropTypes.object,
    setActiveCategory: PropTypes.func,
};

export default SliderContainer;
