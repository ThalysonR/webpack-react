import { connect } from 'react-redux';
import { registerReducer } from './store';

export type Module = {
  Component: any,
  Actions?: any,
  Reducer?: any,
  Selectors?: any,
  Sagas?: any
};

const connectModuleWithRedux = (name: string, module: Module): Module => {
  const reduxComponent = connect(
    state => ({ [name]: module.Selectors(state) }),
    { ...module.Actions },
  )(module.Component);
  return { ...module, Component: reduxComponent };
};

export default (redux) => {
  const modules = {};

  return (name: string, moduleProvider: Promise<Module>) => {
    if (name in modules) {
      return Promise.resolve(modules[name]);
    }
    return moduleProvider.then((mod: Module) => {
      registerReducer(redux.store, name, mod.Reducer);
      redux.sagaMiddleware.run(mod.Sagas);
      const connectedComp = connectModuleWithRedux(name, mod);
      modules[name] = connectedComp;
      return connectedComp;
    });
  };
};
