import {registerReducer} from './store';
import {connect} from 'react-redux';

export type Module = {
    Component: any,
    Actions?: any,
    Reducer?: any,
    Selectors?: any,
    Sagas?: any
};

const connectModuleWithRedux = (name: string, module: Module) => {
    const reduxComponent = connect(
        state => ({[name]: module.Selectors(state)}),
        {...module.Actions}
    )(module.Component);
    return {...module, Component: reduxComponent};
};

export default redux => {
    const modules = {};

    return (name, moduleProvider: Promise<Module>) => {
        if(modules.hasOwnProperty(name)) {
            return Promise.resolve(modules[name]);
        }
        else {
            return moduleProvider.then(mod => {
                registerReducer(redux.store, name, mod.Reducer);
                redux.sagaMiddleware.run(mod.Sagas);
                const connectedComp = connectModuleWithRedux(name, mod);
                modules[name] = connectedComp;
                return connectedComp;
            })
        }
    }
}