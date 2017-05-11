import { CHANGE_TAB, CLOSE_TAB, ADD_TAB } from '../actions/action_types'
import { LOCATION_CHANGE } from 'react-router-redux'
import * as constant from './constants'
const initialState = {
    scenes:constant.scenes,

    tabChildren: []
}

//TODO Get the matchURL and send it as payload and set the activelabel as the payload
// Make a generalized ACTION LOAD_DEFAULT_TABS that receive a payload:{scene,urlMatch}
        //TODO Check if the route exists, if it doesn't redirect to 404
        //TODO Check for the scenes and load the appropiate fixed tabs scenes
        //TODO Check if any tabs exists
        //TODO if not => create a new one
const global = (state = initialState, action) => {
   
    if (action.type === LOCATION_CHANGE) {
        //@TEMP
        let locationVar = action.payload.pathname.split('/').pop()
        let activeLbl = locationVar.charAt(0).toUpperCase() + locationVar.slice(1)
        console.log(state)
        return { ...state, activeLabel: activeLbl }
    }
    switch (action.type) {
        case 'LOAD_TABS_DASHBOARD':
            {
               
                console.log('------------------------------------');
                console.log(constant.defaultTabs.filter((item) => item.label === state.activeLabel));
                console.log(state.activeLabel)
                console.log('------------------------------------');
                if (constant.defaultTabs.filter((item) => item.label === state.activeLabel).length===0&&state.activeLabel!=='Dashboard')
                {
                return {
                    ...state,
                    tabChildren: constant.defaultTabs.concat({label:action.payload.label,icon:action.payload.icon,location:'/dashboard/'+action.payload.label,fixed:false})
                }}
                else
                return{
                    ...state,
                    tabChildren: constant.defaultTabs
                }
            }
        case 'LOAD_TABS_TASKS':
            {
               
                return {
                    ...state,
                    activeLabel: constant.tasksTabs[0].label,
                    tabChildren: constant.tasksTabs
                }
            }
        case CHANGE_TAB:
            {

                return {
                    ...state,
                    activeLabel: action.payload
                }
            }

        case CLOSE_TAB:
            {
                //TODO Open last tab
                return {
                    ...state,
                    tabChildren: state.tabChildren.filter((item) => item.label !== action.payload.label)
                }
            }
        case ADD_TAB:
            {
                //TODO check if the tab is already open
                return {
                    ...state,
                    tabChildren: state.tabChildren.concat(action.payload)
                }
            }
        default:
                return state;
            
          
   }

}
export default global