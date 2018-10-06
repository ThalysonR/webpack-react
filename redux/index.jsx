import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './Counter/counter.reducer';
import Counter from './Counter/counter';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Counter/counter.sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>
    ,document.getElementById('app'));