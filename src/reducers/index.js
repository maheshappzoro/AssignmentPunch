import { combineReducers } from 'redux';

import gallaryReducer from './gallaryReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    searchReducer,
    gallaryReducer
});

export default rootReducer;