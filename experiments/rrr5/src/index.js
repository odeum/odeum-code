/*Import Section*/
//@ New tabs
// import General from './components/Tabs/General'
// import Users from './components/Tabs/Users'
import Dynamic from './components/Tabs/Dynamic'
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
  //@ ^ As we issue navigation events via Redux we will not use the default Reducers for Routing, instead we will make our own.
//Store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)))

/*End Constants*/

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <HomeContainer>
            <Route path="/dashboard/:name" component={scenes.Dashboard}/>
            {/*//@Moved to their respective component*/}
            {/*<Route path="/dashboard/general" component={General}/>
            <Route path="/:dashboard/users" component={Users}/>*/}
            <Route path="/registreringer" component={scenes.Registreringer}/>
            <Route path="/organisation" component={scenes.Organisation}/>
            <Route path="/settings" component={scenes.Settings}/>
            <Route path="/:dashboard/tasks" component={scenes.Tasks}/>
            <Route path="/dashboard/dynamic" component={Dynamic}/>
            </HomeContainer>
            </Switch>
</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);