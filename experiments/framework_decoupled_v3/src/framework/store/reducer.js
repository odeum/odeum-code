//Framework Reducers
// import global from './reducers/global'
// import menu from '../containers/Menu/menuReducer'
import tabReducer from './modules/tabs'
//Import all custom Reducers from reducer.js inside custom_apps folder
import * as custom from 'app/reducer'

const reducer = { tabReducer, ...custom }

export default reducer