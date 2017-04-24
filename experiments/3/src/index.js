/*Import Section*/
//React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import {createStore, applyMiddleware, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

//Redux Dev Tools
import {composeWithDevTools} from 'redux-devtools-extension'

//Redux Router
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'

//Reducers
import * as reducers from './store/reducer'

//Containers
import HomeContainer from './containers/Home'
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
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk,middleware)))

/*End Constants*/

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={HomeContainer}/>
      {/*<Route path="/scenes/:scene/:user" component={HomeContainer}/>*/}
      {/*<Route path="/scenes/:scene/" component={HomeContainer}/>*/}
      <Route path="/scenes/:scene/:tab?" component={HomeContainer}/>
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
