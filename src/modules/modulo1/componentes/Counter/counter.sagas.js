import { delay } from 'redux-saga';
import {
  call, takeEvery, all, put,
} from 'redux-saga/effects';

export function* incAsync() {
  try {
    yield call(delay, 100);
    yield put({ type: 'INC' });
  } catch (e) {
    yield put({ type: 'FAIL', erro: e });
  }
}

export function* watchIncAsync() {
  yield takeEvery('INC_ASYNC', incAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncAsync(),
  ]);
}
