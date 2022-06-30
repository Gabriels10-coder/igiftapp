import {combineReducers, AnyAction} from 'redux';
import AuthReducer from '../modules/auth/index.store';

const combinedReducers = combineReducers({
    auth: AuthReducer,
});
const rootReducer = (
    state: ReturnType<typeof combinedReducers>,
    action: AnyAction,
): ReturnType<typeof combinedReducers> => {
    if (action.type === 'root/resetState') {
        return combinedReducers(undefined, action);
    }

    return combinedReducers(state, action);
};
export default rootReducer;
