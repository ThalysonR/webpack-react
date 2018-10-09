import {incAsync} from './counter.sagas';
import {call, put} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {CoffeeShopApi} from "../../api/index";

test('incrementAsync Saga test', () => {
    const gen = incAsync();

    expect(gen.next().value).toEqual(call(delay, 100));
    expect(JSON.stringify(gen.next().value)).toEqual(JSON.stringify(call(CoffeeShopApi().coffeeShopFind)));
    expect(gen.next().value).toEqual(put({type: 'INC'}));
    expect(gen.next()).toEqual({done: true, value: undefined});
});

test('incrementAsync Saga exception test', () => {
    const gen = incAsync();

    const erro = {};

    expect(gen.next().value).toEqual(call(delay, 100));
    expect(gen.throw(erro).value).toEqual(put({ type: "FAIL", erro: erro }));
    expect(gen.next()).toEqual({done: true, value: undefined});
});