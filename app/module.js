import {registerReducer} from './store';
import {connect} from 'react-redux';

export type Module = {
    Component: any,
    Actions?: any,
    Reducers?: any,
    Selectors?: any,
    Sagas?: any
};

export default redux => {
    const modules = {};

    return (name, moduleProvider: Promise<Module>) => {
        if(modules.hasOwnProperty(name)) {
            return Promise.resolve(modules[name]);
        }
        else {
            return moduleProvider.then(mod => {
                registerReducer(redux.store, name, mod.Reducers);
                redux.store.dispatch({type: 'RESET'});
                redux.sagaMiddleware.run(mod.Sagas);
                let reduxComponent = connect(
                    state => ({[name]: mod.Selectors(state)}),
                    {...mod.Actions}
                )(mod.Component);
                const newMod = {...mod, Component: reduxComponent};
                modules[name] = newMod;
                return newMod;
            })
        }
    }
}