import {incAsync} from './counter.sagas';
import {call, put} from 'redux-saga/effects';
import {delay} from 'redux-saga';

test('incrementAsync Saga test', () => {
    const gen = incAsync();

    expect(gen.next().value).toEqual(call(delay, 1000));
    expect(gen.next().value).toEqual(put({type: 'INC'}));
    expect(gen.next()).toEqual({done: true, value: undefined});
});