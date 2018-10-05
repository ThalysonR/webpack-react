import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Field from './field';

const reducers = combineReducers({
   field: () => ({ value: 'Opa'})
});

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Field initialValue={'Inicial'} />
    </Provider>
    ,document.getElementById('app'));