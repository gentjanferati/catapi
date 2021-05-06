
import responseStatusReducer from './resstatus';

import {combineReducers} from 'redux';


const allReducers = combineReducers({
    responseStatus: responseStatusReducer
});

export default allReducers;