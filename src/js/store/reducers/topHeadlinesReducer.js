import { GET_TOP_HEADLINES } from '../types';

const initialState = {
    data: {},
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TOP_HEADLINES:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
