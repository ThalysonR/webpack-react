import {createSelector} from 'reselect';

const getCounter = state => state.counter;

export const getCounterState = createSelector(
    [getCounter],
    counter => counter
);