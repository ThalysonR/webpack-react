import { registerReducer } from './store';

type Module = {
  Component: any,
  Reducers?: any,
  Sagas?: any,
  Epics?: any,
};

type Redux = {
  store: any,
  epicMiddleware?: any,
};

export default ({ store, epicMiddleware }: Redux) => {
  const modules = {};

  return (name: string, moduleProvider: Promise<Module>) => {
    if (name in modules) {
      return Promise.resolve(modules[name]);
    }
    return moduleProvider.then((mod: Module) => {
      registerReducer(store, name, mod.Reducers);
      epicMiddleware.run(mod.Epics);
      return mod;
    });
  };
};
