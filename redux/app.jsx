import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Counter } from './Counter';
import { Form } from './Form';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Counter}/>
                    <Route exact path={'/form'} component={Form}/>
                </Switch>
            </BrowserRouter>
        )
    }
}