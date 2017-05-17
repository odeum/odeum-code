import React from 'react'
import { Route } from 'react-router'
// import App from './containers/App'
import Eplan from './containers/Eplan'
import Mikkel from './containers/Mikkel'
import Dashboard from './scenes/Dashboard'

export default <Route path="/" component={Eplan}>
  <Route path="/dashboard" component={Dashboard} />
  <Route path="/mikkel" component={Mikkel} />
  <Route path="/mikkel/:login" component={Mikkel} />
  <Route path="/mikkel/:login/henrik" component={Mikkel} />
  <Route path="/splittest" getComponent={(location, callback) => {
      console.log(location)
      require.ensure([], require => {
        console.log('Splittest required');
        callback(null, require('./containers/Splittest').default)
      }, 'Splittest')
    }}  />
</Route>