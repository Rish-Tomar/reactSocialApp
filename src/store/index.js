import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers';
import logger from 'redux-logger';

var store;

export function configureStore(){
    store = createStore(reducer,applyMiddleware(thunk,logger));

    return store
}