import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {appTheme} from './appTheme';
import AsyncComponent from './AsyncComponent';
import redux from './store';
import module from './module';
import {Provider} from 'react-redux';

const register = module(redux);

const Counter = () => register('counter', import(/* webpackChunkName: "Counter" */ './modules/Counter'));
// const Form = () => import(/* webpackChunkName: "Form" */ './modules/Form');

ReactDOM.render(
    <Provider store={redux.store}>
        <Fragment>
            <CssBaseline/>
            <MuiThemeProvider theme={appTheme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={() => <AsyncComponent moduleProvider={Counter}/>}/>
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        </Fragment>
    </Provider>
    ,document.getElementById('app'));