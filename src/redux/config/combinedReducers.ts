import {combineReducers} from 'redux';
import AuthReducer from '../modules/auth/index.store';
import UtilsReducer from '../modules/utils/index.store';

const combinedReducers = combineReducers({
    auth: AuthReducer,
    utils: UtilsReducer,
});

export default combinedReducers;
