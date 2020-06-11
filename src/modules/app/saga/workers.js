import { put, delay, call, select } from 'redux-saga/effects';
import actionTypes from '../../../constants/actionTypes';
import * as api from './api';
import * as actions from '../actions';
import * as selectors from '../selectors';
import * as helpers from './helpers';

export function* initialization() {
    const userData = yield call(api.getUserDataFromServer);

    userData.services.sort((a, b) => a.count < b.count ? 1 : -1);
    userData.comments = userData.commentsData.length;

    yield put(actions.setUserData(userData));

    yield delay(500);

    yield put(actions.setIsLoading(false));
};

export function* sendMessage(action) {
    if (!action.payload || !action.payload.trim()) {
        return false;
    }

    const commentsData = yield select(selectors.getCommentsData);

    const date = new Date();

    commentsData.push({
        date: `${date.getDate()} ${helpers.getMonthName(date.getMonth())} ${date.getFullYear()}`,
        author: 'Me',
        message: action.payload,
    });

    yield put(actions.setCommentsData(commentsData.slice()));
}