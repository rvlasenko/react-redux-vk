export const initialState = {
    user: {
        name: 'Рома',
        age: 22,
    },
};

export function rootReducer(state = initialState) {
    return state;
}
