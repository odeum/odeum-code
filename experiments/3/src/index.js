/*Import Section*/

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
//Store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)))

/*End Constants*/

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <HomeContainer>
        
            {/*@ Demo for Nesting further*/}
        
            <Route path="/dashboard/" component={scenes.dashboard}/>
            {/*<Route path='/dashboard/test' component={scenes.settings}/>*/}
            
            <Route path="/registreringer" component={scenes.registreringer}/>
            <Route path="/organisation" component={scenes.organisation}/>
            <Route path="/settings" component={scenes.settings}/>
            <Route path="/tasks" component={scenes.tasks}/>
            
            </HomeContainer>
            </Switch>
</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);