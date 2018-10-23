import { createStore } from 'redux';

export function storeFactory(initialState) {
  return createStore({ root: null }, initialState);
}

export function findByTestAttr(wrapper, val) {
  return wrapper.find(`[teste="${val}"]`);
}
