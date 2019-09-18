import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';

// без начального состояния так как используется составной редуктор
export const store = createStore(rootReducer);
