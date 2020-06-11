import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../../constants/actionTypes';
import * as workers from './workers';

export function* appWatchers() {
    yield takeEvery(actionTypes.INITIALIZATION, workers.initialization);
}