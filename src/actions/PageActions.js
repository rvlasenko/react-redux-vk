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

function getPhotosByYear(photos, year) {
    let yearPhotos = [];

    photos.forEach(photo => {
        let photoYear = new Date(photo.created_time * 1000).getFullYear();

        if (photoYear === year) {
            yearPhotos.push(photo);
        }
    });

    yearPhotos.sort((a, b) => b.likes.count - a.likes.count);

    return yearPhotos;
}

export function getPhotos(year) {
    return (dispatch, getState) => {
        const matches = window.location.hash.match(/=(.*)/);

        dispatch({
            type: REQUEST_START,
            payload: year,
        });

        fetch(
            'https://api.instagram.com/v1/users/self/media/recent?access_token=' +
                matches[1]
        ).then(response => {
            response.json().then(images => {
                const photosByYear = getPhotosByYear(images.data, year);
                dispatch({
                    type: REQUEST_SUCCESS,
                    payload: photosByYear,
                });
            });
        });
    };
}
