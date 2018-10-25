import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CoffeeShopApi } from './api';

function createReducer(reducers) {
  return combineReducers({
    root: (state = null) => state,
    ...reducers,
  });
}

const dependencias = {
  CoffeeShopApi: CoffeeShopApi(),
};

const epicMiddleware = createEpicMiddleware({
  dependencies: dependencias,
});
export default (() => {
  const store = createStore(createReducer(), composeWithDevTools(
    applyMiddleware(epicMiddleware),
  ));
  store.async = {};
  return { store, epicMiddleware };
})();

export function registerReducer(store, name, reducer) {
  const newStore = store;
  newStore.async[name] = reducer;
  store.replaceReducer(createReducer(newStore.async));
  store.dispatch({ type: 'UPDATE_STORE' });
}
