import { connect } from 'react-redux';
import { registerReducer } from './store';

type Module = {
  Component: any,
  Reducers?: any,
  Sagas?: any
};

type Redux = {
  store: any,
  sagaMiddleware?: any,
};

type ReduxComponent = {
  Actions: any,
  Component: any,
  Selectors: any,
  store: string,
}

export function connectComponentWithRedux(reduxComponent: ReduxComponent) {
  return connect(
    state => ({ [reduxComponent.store]: reduxComponent.Selectors(state) }),
    { ...reduxComponent.Actions },
  )(reduxComponent.Component);
}

export default ({ store, sagaMiddleware }: Redux) => {
  const modules = {};

  return (name: string, moduleProvider: Promise<Module>) => {
    if (name in modules) {
      return Promise.resolve(modules[name]);
    }
    return moduleProvider.then((mod: Module) => {
      registerReducer(store, name, mod.Reducers);
      sagaMiddleware.run(mod.Sagas);
      return mod;
    });
  };
};
