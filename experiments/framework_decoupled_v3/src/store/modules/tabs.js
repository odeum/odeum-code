import config from 'custom_apps/config.json'
/*Action Types*/
export const CHANGE_TAB = "@@TABS/CHANGE_TAB"
export const SET_SUBTABS = "@@TABS/SET_TABS"
export const INIT_TAB_INSTANCE = "@@TABS/INIT_TABS_INSTANCE"
export const ADD_TAB = "@@TABS/ADD_TAB"
export const CHANGE_ID = "@@TABS/CHANGE_ID"
export const CLOSE_TAB = "@@TABS/CLOSE_TAB"
var _ = require('lodash')

/*Actions*/
export const addTab = (id, tab) => ({
    type: ADD_TAB,
    payload: {
        id: id,
        tab: tab
    }
})
export const tabClose = (id,tab) =>{
    return{
    type:CLOSE_TAB,
    payload:{
        id: id,
        tab:tab
    }
}
}
export const changeId = (scene) => ({
    type: CHANGE_ID,
    payload: {scene:scene}
})
export const tabChange = (id, label) => {
   if(label)
   return{
    type: CHANGE_TAB,
    payload: {
        id: id,
        label: label}}
    else return {
        type:CHANGE_TAB,
        payload:{
            id: id,
            label: ''
        }
    }
}

export const setTabs = (id, tabs) => ({
    type: SET_SUBTABS,
    payload: {
        id: id,
        tabs: tabs
    }
})

/*Reducer*/
const initialState = {
    scenes: config.scenes,
    activeScene: config.scenes[0].id,
    tabInstance: config.tabs || [
            {
                id: 0,
                tabs: [{
                    label: 'Error',
                    location: 'e404',
                    icon: 'error',
                    isFixed: false
                }],
                activeTab: 'Error'
            }]
}
function findInstanceByID(id, tabInstance) {
    return _.find(tabInstance, (tabInstance) => (tabInstance.id === id))

}
export default function tabs(state = initialState, action) {
    switch (action.type) {
        case CLOSE_TAB:{
            let findInstance = findInstanceByID(action.payload.id, state.tabInstance)
            let newTabs =findInstance.tabs.filter((tab)=> tab !== action.payload.tab)
            findInstance.tabs = newTabs
            let newInstances = _(state.tabInstance).keyBy('id').set(findInstance.id, findInstance).values().value()
            return{
                ...state,
                tabInstance: newInstances
            }
        }
        case CHANGE_ID: {
            return {
                ...state,
                activeScene: action.payload.scene
            }
        }
        case INIT_TAB_INSTANCE: {
            return {
                ...state,
                tabInstance: state.tabInstance.concat(action.payload)
            }
        }
        case CHANGE_TAB: {
            let findInstance = findInstanceByID(action.payload.id, state.tabInstance)
            if(action.payload.label ==='')
           { findInstance.activeTab = findInstance.tabs[0].label}
            else
            {findInstance.activeTab = action.payload.label}
            let newInstances = _(state.tabInstance).keyBy('id').set(findInstance.id, findInstance).values().value()
            return {
                ...state,
                tabInstance: newInstances
            }
        }
        case ADD_TAB: {
            let findInstance = findInstanceByID(action.payload.id, state.tabInstance)
            let findDuplicate = _.find(findInstance.tabs, action.payload.tab)
            if (findDuplicate===undefined) {
                findInstance.tabs.push(action.payload.tab)
                let newInstances = _(state.tabInstance).keyBy('id').set(findInstance.id, findInstance).values().value()
                return {
                    ...state,
                    tabInstance: newInstances
                }
            }
            else return state
        }
        default:
            return state
    }
}
