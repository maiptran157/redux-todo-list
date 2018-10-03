import { combineReducers } from 'redux';
import listReducer from './list_reducer';

const rootReducer = combineReducers({
    list: listReducer
});

//blue printing what our state will look like
//everytim you built a new reducer, add it to the rootReducer

export default rootReducer;