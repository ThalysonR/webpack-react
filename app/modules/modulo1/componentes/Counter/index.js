import Component from './counter';
import Reducer from './counter.reducer';
import Selectors from './counter.selectors';
import * as Actions from './counter.actions';
import Sagas from './counter.sagas';

const store = 'counter';

export {
  Component, Reducer, Selectors, Actions, Sagas, store,
};
