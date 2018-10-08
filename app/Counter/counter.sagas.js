import { delay } from 'redux-saga';
import { call, takeEvery, all, put } from 'redux-saga/effects';
import {CoffeeShopApi} from '../api';
import type {CoffeeShop} from "../api";

export function* incAsync() {
    try {
        yield call(delay, 100);
        let teste: Array<CoffeeShop> = yield call(CoffeeShopApi().coffeeShopFind);
        console.log(teste);
        yield put({ type: 'INC' })
    } catch (e) {
        yield put({ type: 'FAIL', erro: e})
    }
}

export function* watchIncAsync() {
    yield takeEvery('INC_ASYNC', incAsync);
}

export default function* rootSaga() {
    yield all([
        watchIncAsync()
    ])
}