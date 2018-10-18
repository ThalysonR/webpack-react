import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Reducers from './modulo1.reducers';
import Sagas from './modulo1.sagas';
import { Component as Form } from './componentes/Form';
import { Component as Counter } from './componentes/Counter';

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
    <div>
      <Typography component="h2" variant="h1" gutterBottom>
        Modulo 1
      </Typography>
      <Switch>
        <Route exact path={`${path}/counter`} component={Counter} />
        <Route exact path={`${path}/form`} component={Form} />
        <Route path={`${path}/`} component={Teste} />
      </Switch>
    </div>
  );
}

export { Component, Reducers, Sagas };
