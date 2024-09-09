import authReducer from './authReducer';
import generalReducer from './generalReducer';
import revOrderReducer from './revOrderReducer';
import acptOrdersReducer from './acptOrdersReducer';
import completeReducer from './completeReducer';
import postReducer from './postReducer';

import {combineReducers} from'redux'

const rootReducer = combineReducers({
    auth:authReducer,
    general:generalReducer,
    revOrders:revOrderReducer,
    AcptOrders:acptOrdersReducer,
    completes:completeReducer,
    post:postReducer,

})

export default rootReducer;