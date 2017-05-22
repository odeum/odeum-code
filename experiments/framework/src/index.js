import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import AppContainer from './containers/App/App'
import scenes from './scenes/scenesCombiner'
import reducers from './store/reducer'
import dashboardTabs from './scenes/Dashboard/Tabs/dashboardTabs.js'
//Redux Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import Dynamic from './containers/App/Tabs/Dynamic'


const middlewares = [thunk, routerMiddleware(browserHistory)/*, logger*/]

// const composeEnhancers =
//   (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//     global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     })) || compose

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
// Add the reducer to your store on the `routing` key
export const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(...middlewares))
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <Route path="dashboard/" component={scenes.Dashboard} >
          <Route path="general" component={dashboardTabs.General} />
          <Route path="fields" component={dashboardTabs.Fields} />
          <Route path="workflow" component={dashboardTabs.Workflow} />
          <Route path="users" component={dashboardTabs.Users} />
          <Route path="operations" component={dashboardTabs.Operations} />
          <Route path="configuration" component={dashboardTabs.Configuration} />
          <Route path="design" component={dashboardTabs.Design} />
        </Route>
        <Route path="/reports" component={scenes.Reports}>
        </Route>
        <Route path="/organisation" component={scenes.Organisation}>
        </Route>
        <Route path="/settings" component={scenes.Settings}>
        </Route>
        <Route path="/forms" component={scenes.Forms}>
        </Route>
        <Route path="/:dynamic/dynamic" component={Dynamic}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)