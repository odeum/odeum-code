import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './store/reducer'
import AppContainer from './containers/App/App'

const middlewares = [thunk, routerMiddleware(browserHistory)]

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(...middlewares))
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <AppContainer store={store} history={history}/>,
  document.getElementById('root')
)