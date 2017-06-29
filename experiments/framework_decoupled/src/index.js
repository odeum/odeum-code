import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import AppContainer from './containers/App/App'
import { history, store } from 'store'


ReactDOM.render(
  <AppContainer store={ store } history={ history } />
  ,
  document.getElementById('root')
)
registerServiceWorker()