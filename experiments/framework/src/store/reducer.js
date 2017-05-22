import global from './reducers/global'
import menu from '../containers/App/Menu/menuReducer'
import tabs from '../containers/App/Tabs/tabsReducer'

import * as custom from '../custom_apps/reducer'

const reducer = {global,menu,tabs,...custom}

export default reducer