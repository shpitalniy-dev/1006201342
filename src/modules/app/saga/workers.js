import { put, delay, call } from 'redux-saga/effects';
import actionTypes from '../../../constants/actionTypes';
import * as api from './api';
import * as actions from '../actions';

export function* initialization() {
    const userData = yield call(api.getUserDataFromServer);

    userData.services.sort((a, b) => a.count < b.count ? 1 : -1);

    yield put(actions.setUserData(userData));

    yield delay(500);

    yield put(actions.setIsLoading(false));
};