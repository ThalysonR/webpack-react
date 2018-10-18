import { combineReducers } from 'redux';
import { Reducer as CounterReducers, store as CounterStore } from './componentes/Counter';

export default combineReducers({
  [CounterStore]: CounterReducers,
});
