import { delay } from 'redux-saga';
import { call, takeEvery, all, put } from 'redux-saga/effects';

function* incAsync() {
    yield call(delay, 1000);
    yield put({ type: 'INC' })
}

function* watchIncAsync() {
    yield takeEvery('INC_ASYNC', incAsync);
}

export default function* rootSaga() {
    yield all([
        watchIncAsync()
    ])
}