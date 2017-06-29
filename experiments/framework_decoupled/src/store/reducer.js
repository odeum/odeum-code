//Framework Reducers
// import global from './reducers/global'
// import menu from '../containers/Menu/menuReducer'
import tabs from './modules/tabs'
//Import all custom Reducers from reducer.js inside custom_apps folder
import * as custom from '../custom_apps/reducer'

const reducer = {tabs,...custom}

export default reducer