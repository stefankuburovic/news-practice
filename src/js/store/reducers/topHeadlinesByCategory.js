import { GET_TOP_HEADLINES_BY_CATEGORY } from '../types';

const initialState = {
    data: {},
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TOP_HEADLINES_BY_CATEGORY:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
