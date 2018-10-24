import { combineEpics } from 'redux-observable';
import { Epics as Counter } from './componentes/Counter';

export default combineEpics(
  ...Counter,
);
