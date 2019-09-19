import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// без начального состояния так как используется составной редуктор
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
