import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {appTheme} from './appTheme';
import Loadable from 'react-loadable';
import store from './store';
import module from './module';
import {Provider} from 'react-redux';
// import {applyMiddleware, compose, createStore} from 'redux';
// import App from './app';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas';
// import reducers from './reducer';
//
// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     reducers,
//     composeEnhancers(
//         applyMiddleware(sagaMiddleware)
//     )
// );
// sagaMiddleware.run(rootSaga);

const register = module(store);

const Loading = () => <div>Carregando...</div>;
const Counter = Loadable({
    loader: () => register('counter', import('./modules/Counter/counter')),
    loading: Loading
});

const Form = Loadable({
    loader: () => import('./modules/Form/form'),
    loading: Loading
});

ReactDOM.render(
    <Provider store={store}>
            <CssBaseline/>
            <MuiThemeProvider theme={appTheme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={Counter}/>
                        <Route exact path={'/form'} component={Form}/>
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
    </Provider>
    ,document.getElementById('app'));