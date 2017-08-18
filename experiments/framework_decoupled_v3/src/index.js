import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import AppContainer from 'framework/containers/App/App'
import { history, store } from 'framework/store'
import 'normalize.css'

ReactDOM.render(
	<AppContainer store = { store } history = { history } />
	,
	document.getElementById('root')
)
registerServiceWorker()