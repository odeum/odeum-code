//Framework Reducers
import global from './reducers/global'
import menu from '../containers/App/Menu/menuReducer'

//Import all custom Reducers from reducer.js inside custom_apps folder
import * as custom from '../custom_apps/reducer'

const reducer = {global,menu,...custom}

export default reducer