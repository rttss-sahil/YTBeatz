import { createStore, combineReducers } from 'redux';

import displayReducer from '../reducers/display.reducer';

const store = createStore(
    combineReducers({ displayReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;