import global from './reducers/global'
import menu from '../containers/App/Menu/menuReducer'
import tabs from '../containers/App/Tabs/tabsReducer'
import dashboard from '../scenes/Dashboard/dashboardReducer'
const reducer = {global,menu,tabs,dashboard}
export default reducer