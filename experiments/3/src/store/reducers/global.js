import { CHANGE_TAB, CLOSE_TAB, ADD_TAB } from '../actions/action_types'
// import {push} from 'react-router-redux'
// import Organisation from '../../scenes/Organisation'
// import {LOCATION_CHANGE} from 'react-router-redux'

import * as tabs from './tabConstants'
let nextTabId = 0;
const initialState = {
    scenes: [
        {
            id: nextTabId++,
            name: 'Dashboard',
            location: '/dashboard/general',

        }, {
            id: nextTabId++,
            name: 'Opgaver',
            location: '/tasks',

        },
        {
            id: nextTabId++,
            name: 'Registreringer',
            location: '/registreringer',

        },
        {
            id: nextTabId++,
            name: 'Organisation',
            location: '/organisation',

        },
        {
            id: nextTabId++,
            name: 'Indstillinger',
            location: '/settings',

        }],
    tabChildren: [],
    activeLabel: '',
}

//TODO Get the matchURL and send it as payload and set the activelabel as the payload
// For Example if you go to /dashboards/users, it should load users component
// you need an if(action.payload==!''), a find string/match label in defaultTabs and then return the label
// Make a generalized ACTION LOAD_DEFAULT_TABS that receive a payload:{scene,urlMatch}
// Maybe https://blog.marvelapp.com/managing-the-url-in-a-redux-app/

const global = (state = initialState, action) => {
    switch (action.type) {
        // case LOCATION_CHANGE:
        //  console.log(action)
        //     return state;

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