import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Reducers from './modulo1.reducers';
import Epics from './modulo1.epics';
import { Component as Form } from './componentes/Form';
import { Component as Counter } from './componentes/Counter';

const Teste = () => (
  <div>
    Oi
    <br />
    <Link to="/modulo1/counter">Counter</Link>
  </div>
);

type Props = {
  path: string,
}

function Component({ path }: Props) {
  return (
    <div>
      <h1>
        Modulo 1
      </h1>
      <Switch>
        <Route exact path={`${path}/counter`} component={Counter} />
        <Route exact path={`${path}/form`} component={Form} />
        <Route path={`${path}/`} component={Teste} />
      </Switch>
    </div>
  );
}

export {
  Component, Reducers, Epics,
};
