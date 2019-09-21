import {
    LOGIN_SUCCESS,
    LOGIN_START,
    LOGIN_FAILED,
    GET_USER_IMAGES,
    GET_USER_NAME,
} from '../actions/UserActions';

const initialState = {
    isLoading: false,
    images: [],
    error: '',
    name: '',
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                name: action.payload,
                error: '',
            };
        case LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case GET_USER_IMAGES:
            return {
                ...state,
                images: action.payload,
            };
        default:
            return state;
    }
}
