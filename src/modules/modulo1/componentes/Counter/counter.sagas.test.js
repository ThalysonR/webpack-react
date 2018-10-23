import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { incAsync } from './counter.sagas';

test('incrementAsync Saga test', () => {
  const gen = incAsync();

  expect(gen.next().value).toEqual(call(delay, 100));
  expect(gen.next().value).toEqual(put({ type: 'INC' }));
  expect(gen.next()).toEqual({ done: true, value: undefined });
});

test('incrementAsync Saga exception test', () => {
  const gen = incAsync();

  const erro = {};

  expect(gen.next().value).toEqual(call(delay, 100));
  expect(gen.throw(erro).value).toEqual(put({ type: 'FAIL', erro }));
  expect(gen.next()).toEqual({ done: true, value: undefined });
});
