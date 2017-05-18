import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './store/reducer'
// import routes from './config/routes'
import AppContainer from './containers/App/App'
// import scenes from './scenes/scenesCombiner'
// import dashboardTabs from './scenes/Dashboard/Tabs/dashboardTabs.js'
// import Dynamic from './containers/App/Tabs/Dynamic'


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
  /*<Provider store={store}>
    <div>
    <Router history={history} routes={routes}/>
    </div>
  </Provider>,*/
  <AppContainer store={store} history={history}/>,
  document.getElementById('root')
)