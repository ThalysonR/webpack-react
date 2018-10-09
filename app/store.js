import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
export default (() => {
    const store = createStore(createReducer(), composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ));
    store.async = {};
    sagaMiddleware.run(rootSagas);
    return store;
})();

export function registerReducer(store, name, reducer) {
    store.async[name] = reducer;
    store.replaceReducer(createReducer(store.async));
}

function createReducer(reducers) {
    return combineReducers({
        root: (state=null) => state,
        ...reducers
    })
}