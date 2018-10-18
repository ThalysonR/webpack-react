import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Reducers from './modulo1.reducers';
import Sagas from './modulo1.sagas';
import * as counter from './componentes/Counter';
import { connectComponentWithRedux } from '../../module';

const Counter = connectComponentWithRedux(counter);
const Teste = () => (
  <div>
    Oi<br/>
    <Link to="/modulo1/counter">Counter</Link>
  </div>
);

type Props = {
  path: string,
}
function Component({ path }: Props) {
  return (
    <Switch>
      <Route exact path={`${path}/counter`} component={Counter} />
      <Route path={`${path}/`} component={Teste} />
    </Switch>
  );
}

export { Component, Reducers, Sagas };
