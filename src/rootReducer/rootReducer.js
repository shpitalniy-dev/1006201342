import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { themeReducer } from '../themes/reducer';
import actionTypes from '../constants/actionTypes';
import { translateReducer } from '../translates/reducer';
import { appReducer } from '../modules/app/reducer';

const appReducers = combineReducers({
    app: appReducer,
    theme: themeReducer,
    router: routerReducer,
    translates: translateReducer,
});

const rootReducer = (state, action) => {
    if (action.type === actionTypes.CLEAR_STORAGE) {
        state = undefined;
    }
    return appReducers(state, action);
}

export default rootReducer;