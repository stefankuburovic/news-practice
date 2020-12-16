import { GET_TOP_HEADLINES, GET_TOP_HEADLINES_ERR } from '../types';
import axios from 'axios';

export const getTopHeadlines = (country) => async (dispatch) => {
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_APP_URI}/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_APP_TOKEN}`,
        );
        dispatch({
            type: GET_TOP_HEADLINES,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: GET_TOP_HEADLINES_ERR,
            payload: console.log(e),
        });
    }
};
