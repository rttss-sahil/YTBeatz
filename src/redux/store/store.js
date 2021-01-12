import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import initialState from '../states/initialState';

const store = createStore(rootReducer, initialState)

export default store;