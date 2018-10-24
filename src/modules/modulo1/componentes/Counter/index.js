import Component from './counter';
import Reducer from './counter.reducer';
import Selectors from './counter.selectors';
import Actions from './counter.actions';
import Sagas from './counter.sagas';
import Epics from './counter.epics';

const store = 'counter';

export {
  Component, Reducer, Selectors, Actions, Sagas, Epics, store,
};
