import React from 'react';
import Reducers from './modulo1.reducers';
import Sagas from './modulo1.sagas';
import * as counter from './componentes/Counter';
import { connectComponentWithRedux } from '../../module';

const Counter = connectComponentWithRedux(counter);

function Component() {
  return (
    <Counter />
  );
}

export { Component, Reducers, Sagas };
