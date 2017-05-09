import { CHANGE_TAB, CLOSE_TAB, ADD_TAB } from '../actions/action_types'
import { LOCATION_CHANGE } from 'react-router-redux'
import * as constant from './constants'
const initialState = {
    scenes:constant.scenes,

    tabChildren: []
}

//TODO Get the matchURL and send it as payload and set the activelabel as the payload
// For Example if you go to /dashboards/users, it should load users component
// you need an if(action.payload==!''), a find string/match label in defaultTabs and then return the label
// Make a generalized ACTION LOAD_DEFAULT_TABS that receive a payload:{scene,urlMatch}
// Maybe https://blog.marvelapp.com/managing-the-url-in-a-redux-app/
        //TODO Check if the route exists, if it doesn't redirect to 404?
        //TODO Check for the scenes and load the appropiate fixed tabs scenes
        //@ This is done by loading default tabs BUT they need to check for a special route
        //TODO Check if any tabs exists
        //TODO if not => create a new one
        //@ Oh boy...
const global = (state = initialState, action) => {
   
    if (action.type === LOCATION_CHANGE) {
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
                // if(state.tabChildren.)
                //@ Example of adding a tab that isn't part of the default ones, instead of giving it fixed values, it can be passed as payload
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
        // case 'LOAD_TABS_TASKS':
        //     {
               
        //         return {
        //             ...state,
        //             activeLabel: tabs.tasksTabs[0].label,
        //             tabChildren: tabs.tasksTabs
        //         }
        //     }
        case CHANGE_TAB:
            {

                return {
                    ...state,
                    activeLabel: action.payload
                }
            }

        case CLOSE_TAB:
            {
                //Open last tab
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