import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

function createReducer(reducers) {
  return combineReducers({
    root: (state = null) => state,
    ...reducers,
  });
}

const sagaMiddleware = createSagaMiddleware();
export default (() => {
  const store = createStore(createReducer(), composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));
  store.async = {};
  return { store, sagaMiddleware };
})();

export function registerReducer(store, name, reducer) {
  const newStore = store;
  newStore.async[name] = reducer;
  store.replaceReducer(createReducer(newStore.async));
  store.dispatch({ type: 'UPDATE_STORE' });
}
