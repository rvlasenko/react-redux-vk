export const SET_YEAR = 'SET_YEAR';
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year,
    };
}

export function getPhotos(year) {
    return dispatch => {
        dispatch({
            type: REQUEST_START,
            payload: year,
        });

        setTimeout(() => {
            dispatch({
                type: REQUEST_SUCCESS,
                payload: [1, 2, 3, 4],
            });
        }, 1000);
    };
}
