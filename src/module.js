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
