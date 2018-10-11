import { createSelector } from 'reselect';

const getCounter = state => state.counter;

const getState = createSelector(
  [getCounter],
  counter => counter,
);

export default getState;
