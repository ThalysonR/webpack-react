/* global document */
import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import appTheme from './appTheme';
import redux from './store';
import module from './module';
import AsyncComponent from './AsyncComponent';

const register = module(redux);
const modulo1 = () => register('modulo1', import('./modules/modulo1'));


ReactDOM.render(
  <Provider store={redux.store}>
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={appTheme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/modulo1" component={() => <AsyncComponent moduleProvider={modulo1} />} />
            <Redirect exact from="/" to="/modulo1" />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Fragment>
  </Provider>,
  document.getElementById('app'),
);
