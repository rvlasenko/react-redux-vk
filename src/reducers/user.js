import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILED } from '../actions/UserActions';

const initialState = {
    isLoading: false,
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
        default:
            return state;
    }
}
