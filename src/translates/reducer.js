import config from '../config/config';
import constants from '../constants/constants';
import actionTypes from '../constants/actionTypes';
import { getTranslatesByLocale } from './translates';

const initialState = {
    locale: config.defaultLocale,
    dictionary: getTranslatesByLocale(config.defaultLocale),
}

export const translateReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOCALE:
            const newState = { ...state };
            newState.locale = action.payload;
            newState.dictionary = getTranslatesByLocale(action.payload);
            return newState;
        default:
            return state;
    }
}