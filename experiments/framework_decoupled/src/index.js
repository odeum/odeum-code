import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
// import logger from 'redux-logger'
import reducers from './store/reducer'
import AppContainer from './containers/App/App'
import * as colors from './assets/colors'
import * as fonts from './assets/fonts'
import {ThemeProvider} from 'styled-components'

const middlewares = [thunk, routerMiddleware(browserHistory)]

const reducer = combineReducers({
  ...reducers,
  form: formReducer,
  routing: routerReducer
})

const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(...middlewares))
)

const history = syncHistoryWithStore(browserHistory, store)
const theme = {
  background: colors.EMERALD_LIGHT,
  color: colors.TAB_COLOR_2,
  font: fonts.PRIMARY,
  button: {
    height:100,
    color: colors.TAB_COLOR_6,
  }
}
ReactDOM.render(
  <AppContainer store={store} history={history}/>
  ,
  document.getElementById('root')
)