import { GET_HEADLINES_BY_SEARCH_TERM } from '../types';

const initialState = {
    data: {},
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HEADLINES_BY_SEARCH_TERM:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
