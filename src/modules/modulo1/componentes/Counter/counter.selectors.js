import { createSelector } from 'reselect';
import { store } from './index';

const getCounter = state => state.modulo1[store];

const getState = createSelector(
  [getCounter],
  state => state,
);

export default getState;
