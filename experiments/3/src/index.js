/*Import Section*/
//@ New tabs
// import General from './components/Tabs/General'
// import Users from './components/Tabs/Users'
// import Dashboard from './scenes/Dashboard'
// import Dynamic from './components/Tabs/Dynamic'
//React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//Redux Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension'

//Redux Router
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

//Reducers
import * as reducers from './store/reducer'

//Containers
import HomeContainer from './containers/Home'

//Scenes
import scenes from './scenes/scenes.js'
/*End Imports*/

/*Constants*/

//Router History
const history = createHistory()
//Router Middleware
const middleware = routerMiddleware(history)
//Reducers + Router
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
/**/
//Store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)))

/*End Constants*/

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <HomeContainer>
            <Route path="/dashboard/:name" component={scenes.Dashboard} />
            {/*<Route path="/dashboard/dynamic" component={Dynamic}/>*/}
            <Route path="/tasks" component={scenes.Tasks}/>
            <Route path="/registreringer" component={scenes.Registreringer} />
            {/*<Route path="/organisation" component={scenes.Organisation} />*/}
            <Route path="/settings" component={scenes.Settings} />
            <Route path='/organisation' getComponent={(location, callback) => {
              console.log(location)
              require.ensure([], require => {
                console.log('Splittest required');
                callback(null, require('./scenes/Organisation/index.js').Organisation)
              }, 'Organisation')
            }} />
          </HomeContainer>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);