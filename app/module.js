import {registerReducer} from './store';

export default store => {
    const modules = {};

    return (name, moduleProvider) => {
        if(modules.hasOwnProperty(name)) {
            return Promise.resolve(modules[name]);
        }
        else {
            return moduleProvider.then(mod => {
                modules[name] = mod;
                registerReducer(store, name, mod.reducer);
                return mod;
            })
        }
    }
}