import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import AppContainer from './containers/App/App'
import scenes from './scenes/scenesCombiner'
import reducers from './store/reducer'
//Redux Dev Tools
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const middlewares = [thunk, routerMiddleware(browserHistory)]

const composeEnhancers =
  (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })) || compose

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
)
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
// Add the reducer to your store on the `routing` key
const store = createStore(
  reducer, enhancer
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
console.log(store)
ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */}
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <Route path="/dashboard" component={scenes.Dashboard} />
        <Route path="/reports" component={scenes.Reports} />
        <Route path="/organisation" component={scenes.Organisation} />
        <Route path="/settings" component={scenes.Settings} />
        <Route path="/forms" component={scenes.Forms} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)