import { SET_YEAR, REQUEST_START, REQUEST_SUCCESS } from '../actions/PageActions';

const initialState = {
    year: 0,
    photos: [],
    isLoading: false,
};

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
            return {
                ...state,
                year: action.payload,
            };
        case REQUEST_START:
            return {
                ...state,
                year: action.payload,
                isLoading: true,
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
}
