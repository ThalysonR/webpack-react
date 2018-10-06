import { delay } from 'redux-saga';
import { call, takeEvery, all, put } from 'redux-saga/effects';

export function* incAsync() {
    yield call(delay, 1000);
    yield put({ type: 'INC' })
}

export function* watchIncAsync() {
    yield takeEvery('INC_ASYNC', incAsync);
}

export default function* rootSaga() {
    yield all([
        watchIncAsync()
    ])
}