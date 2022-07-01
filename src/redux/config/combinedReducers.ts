import {combineReducers} from 'redux';
import AuthReducer from '../modules/auth/index.store';

const combinedReducers = combineReducers({
    auth: AuthReducer,
});

export default combinedReducers;
