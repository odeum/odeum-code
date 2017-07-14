import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from 'framework/store/reducer'
import {asyncDispatchMiddleware} from 'framework/store/middleware/asyncDispatchMiddleware'

const middlewares = [thunk, routerMiddleware(browserHistory), asyncDispatchMiddleware]

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
})

export const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(...middlewares))
)

export const history = syncHistoryWithStore(browserHistory, store)