import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
export default (() => {
    const store = createStore(createReducer(), composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ));
    store.async = {};
    return {store, sagaMiddleware};
})();

export function registerReducer(store, name, reducer) {
    store.async[name] = reducer;
    store.replaceReducer(createReducer(store.async));
    store.dispatch({ type: 'UPDATE_STORE'});
}

function createReducer(reducers) {
    return combineReducers({
        root: (state = null) => state,
        ...reducers
    })
}