import { GET_TOP_HEADLINES_BY_CATEGORY, GET_TOP_HEADLINES_BY_CATEGORY_ERR } from '../types';
import axios from 'axios';

export const getTopHeadlinesByCategory = (country, category, limit = false) => async (dispatch) => {
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_APP_URI}/top-headlines?country=${country}&category=${category}&pageSize=${limit}&apiKey=${process.env.REACT_APP_APP_TOKEN}`,
        );
        dispatch({
            type: GET_TOP_HEADLINES_BY_CATEGORY,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: GET_TOP_HEADLINES_BY_CATEGORY_ERR,
            payload: console.log(e),
        });
    }
};
