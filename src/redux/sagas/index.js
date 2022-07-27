import {all} from 'redux-saga/effects';
import todoListSaga from './todoListSaga';

export default function* rootSaga() {
    yield all([
        todoListSaga(),
    ])
}