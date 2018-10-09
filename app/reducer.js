import  { combineReducers } from 'redux';
import CounterReducer from './modules/Counter/counter.reducer';

export default combineReducers({
    counter: CounterReducer
});