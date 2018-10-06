import { all } from 'redux-saga/effects';
import { CounterSagas } from './Counter';

export default function* rootSaga() {
    yield all([
        CounterSagas()
    ])
}