import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {appTheme} from './appTheme';
import Loadable from 'react-loadable';
// import { Counter } from './Counter';
// import { Form } from './Form';

const Loading = () => <div>Carregando...</div>;
const Counter = Loadable({
   loader: () => import('./modules/Counter/counter'),
   loading: Loading
});

const Form = Loadable({
   loader: () => import('./modules/Form/form'),
   loading: Loading
});

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <MuiThemeProvider theme={appTheme}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path={'/'} component={Counter}/>
                            <Route exact path={'/form'} component={Form}/>
                        </Switch>
                    </BrowserRouter>
                </MuiThemeProvider>
            </Fragment>
        )
    }
}