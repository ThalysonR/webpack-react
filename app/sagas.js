import { all } from 'redux-saga/effects';
import CounterSagas from './modules/Counter/counter.sagas';

export default function* rootSaga() {
    yield all([
        CounterSagas()
    ])
}