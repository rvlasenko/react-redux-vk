export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function handleSuccess(token) {
    return dispatch => {
        // показываем прелоадер
        dispatch({
            type: LOGIN_START,
        });

        fetch('https://api.instagram.com/v1/users/self?access_token=' + token).then(
            response => {
                response.json().then(user => {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: user.data.username,
                    });
                });
            }
        );
    };
}

export function handleError(error) {
    return dispatch => {
        dispatch({
            type: LOGIN_FAILED,
            payload: error,
        });
    };
}

export function handleLogin() {
    return dispatch => {
        dispatch({
            type: LOGIN_START,
        });

        window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=b3d9a11c8d2f4379823eaa378494808c&redirect_uri=http://localhost:3000&scope=basic&response_type=token`;
    };
}
