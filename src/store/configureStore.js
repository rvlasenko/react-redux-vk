import { createStore } from 'redux';
import { initialState, rootReducer } from '../reducers/index';

export const store = createStore(rootReducer, initialState);
