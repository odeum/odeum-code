import { CHANGE_TAB, CLOSE_TAB, ADD_TAB } from '../actions/action_types'

import * as tabs from './tabConstants'
const initialState={
    scenes:[
            {
                id:0,
                name:'Dashboard',
                location:'/dashboard',
                icon: 'dashboard'
            },{
                id:1,
                name:'Opgaver',
                location:'/tasks',
                icon: 'tasks'
            },
            {
                id:2,
                name:'Registreringer',
                location:'/registreringer',
                icon: 'registrations'
            },
            {
                id:3,
                name:'Organisation',
                location:'/organisation',
                icon: 'organisation'
            },
            {
                id:4,
                name:'Indstillinger',
                location:'/settings',
                icon: 'settings'
            }],

    tabChildren:[]
        }

//TODO Get the matchURL and send it as payload and set the activelabel as the payload
// For Example if you go to /dashboards/users, it should load users component
// you need an if(action.payload==!''), a find string/match label in defaultTabs and then return the label
// Make a generalized ACTION LOAD_DEFAULT_TABS that receive a payload:{scene,urlMatch}
// Maybe https://blog.marvelapp.com/managing-the-url-in-a-redux-app/

const global = (state=initialState, action)=>{
    switch(action.type)
    {  
        case 'LOAD_TABS_DASHBOARD':
            return {
                ...state,
                activeLabel: tabs.defaultTabs[0].label,
                tabChildren: tabs.defaultTabs
            }

        case 'LOAD_TABS_TASKS':
            return {
                ...state,
                activeLabel: tabs.tasksTabs[0].label,
                tabChildren: tabs.tasksTabs
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
            return state

    }

}
export default global