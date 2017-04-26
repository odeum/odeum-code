/*Import Section*/
/*eslint-disable */
//@ Experiment React Route Nesting with react-router-redux v5
import Container from './containers/App/Container'
// import Apps from './containers/App/apps'
import Comp1 from './components/App/comp1'
import Comp2 from './components/App/comp2'
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
        {/*<Route path="/" component={HomeContainer}/>*/}
        {/*<Route path="/scenes/:scene/:user" component={HomeContainer}/>*/}
        {/*<Route path="/scenes/:scene/" component={HomeContainer}/>*/}
        {/*<Route path="/:scene/:tab?" component={HomeContainer}/>*/}
      
        {/*<Switch>
          <Container>
          <Route path="/comp1" component={scenes.settings} />
          <Route path="/comp2" component={scenes.dashboard} />
          </Container>
          </Switch>*/}
        <Switch>
          <HomeContainer>
            <Route path="/dashboard" component={scenes.dashboard}/>
            <Route path="/registreringer" component={scenes.registreringer}/>
            <Route path="/organisation" component={scenes.organisation}/>
            <Route path="/settings" component={scenes.settings}/>
            <Route path="/tasks" component={scenes.tasks}/>
            </HomeContainer>
            </Switch>
        {/*<Route path="/app" component={App}>
           <Route path="/comp1" component={Comp1}/>
           <Route path="/comp2" component={Comp2}/>
      </Route>*/}
        {/*<Route path='/:topicID' component={App}/>
        {/*<Route path="/scenes/dashboard/" />
      <Route path="/scenes/organisation" />
      <Route path="/scenes/tasks"/>
      <Route path="/scenes/settings"/>
      <Route path="/scenes/registreringer"/>*/}

</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);