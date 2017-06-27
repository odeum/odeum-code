import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules/rootReducer'
import {createBrowserHistory} from 'history'
import logger from 'redux-logger'
// Create the history
 export const history = createBrowserHistory()


// console.log(routerMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk,logger))

const store = createStore(combineReducers(rootReducer), enhancer)


export default store


/**Async Reducers **/
store.asyncReducers = {}

function replaceReducers(defaultReducers) {
    const merged = Object.assign({}, defaultReducers, store.asyncReducers)
    const combined = combineReducers(merged)
    store.replaceReducer(combined)
}

export function injectAsyncReducers(asyncReducers) {
    const injectReducers = Object.keys(asyncReducers).reduce((all, item) => {
        if (store.asyncReducers[item]) {
            delete all[item]
        }
        return all
    }, asyncReducers)
    store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers)
    replaceReducers(rootReducer)
    store.dispatch({type:'@@REDUX/REDUCER_LOADED_ASYNC',payload:asyncReducers})
}

