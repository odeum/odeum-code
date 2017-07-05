import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from 'store/reducer'
import {asyncDispatchMiddleware} from 'store/modules/tabs'
const middlewares = [thunk, routerMiddleware(browserHistory), asyncDispatchMiddleware]

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

export const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(...middlewares))
)

export const history = syncHistoryWithStore(browserHistory, store)