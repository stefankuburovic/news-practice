import { GET_HEADLINES_BY_SEARCH_TERM, GET_HEADLINES_BY_SEARCH_TERM_ERR } from '../types';
import axios from 'axios';

export const getHeadlinesBySearchTerm = (country, keyword) => async (dispatch) => {
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_APP_URI}/top-headlines?country=${country}&q=${keyword}&apiKey=${process.env.REACT_APP_APP_TOKEN}`,
        );
        dispatch({
            type: GET_HEADLINES_BY_SEARCH_TERM,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: GET_HEADLINES_BY_SEARCH_TERM_ERR,
            payload: console.log(e),
        });
    }
};
