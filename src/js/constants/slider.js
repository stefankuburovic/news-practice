import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/all';

export const SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <BiRightArrow color="black" />,
    prevArrow: <BiLeftArrow color="black" />,
};
