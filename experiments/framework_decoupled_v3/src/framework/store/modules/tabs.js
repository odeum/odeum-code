import config from 'app/config.json'
import { push } from 'react-router-redux'

/*Action Types*/
export const CHANGE_TAB = "@@TABS/CHANGE_TAB"
export const SET_SUBTABS = "@@TABS/SET_TABS"
export const ADD_TAB = "@@TABS/ADD_TAB"
export const ADD_INSTANCE = "@@TABS/ADD_INSTANCE"
export const CHANGE_ID = "@@TABS/CHANGE_ID"
export const CLOSE_TAB = "@@TABS/CLOSE_TAB"
var _ = require('lodash')


/*Actions*/
export const addInstance = (id) => ({
    type: ADD_INSTANCE,
    payload: id
})
export const addTab = (id, tab) => ({
    type: ADD_TAB,
    payload: {
        id: id,
        tab: tab
    }
})
export const tabClose = (id, tab) => {
    return {
        type: CLOSE_TAB,
        payload: {
            id: id,
            tab: tab
        }
    }
}

export const changeId = (scene) => ({
    type: CHANGE_ID,
    payload: {
        scene: scene
    }
})
export const tabChange = (id, label) => {
    if (label)
        return {
            type: CHANGE_TAB,
            payload: {
                id: id,
                label: label
            }
        }
    else return {
        type: CHANGE_TAB,
        payload: {
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

// var tabss = config.tabs
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
        case ADD_INSTANCE: {
            let findInstance = findInstanceByID(action.payload, state.tabInstance)
            if (findInstance !== undefined)
                return state
            else {
                var emptyInstance = {
                    id: action.payload,
                    tabs: [],
                    activeTab: ''
                }

                return {
                    ...state,
                    tabInstance: _.concat(state.tabInstance, emptyInstance)
                }
            }
        }
        case CLOSE_TAB: {
            let findInstance = findInstanceByID(action.payload.id, state.tabInstance)
            findInstance.tabs = findInstance.tabs.filter((tab) => tab !== action.payload.tab)
            findInstance.activeTab = findInstance.tabs[0].label
            //REFACTOR
            //POSSIBLE BUG
            action.asyncDispatch(push('/eplan/list'))

            return {
                ...state,
                tabInstance: state.tabInstance.map((instance) => instance.id === findInstance.id ? instance = findInstance : instance),

            }
        }
        case CHANGE_ID: {
            return {
                ...state,
                activeScene: action.payload.scene
            }
        }
        case CHANGE_TAB: {
            let findInstance = findInstanceByID(action.payload.id, state.tabInstance)

            if (action.payload.label === '') {
                findInstance.activeTab = findInstance.tabs[0].label

            } else {

                findInstance.activeTab = action.payload.label
            }
            let newInstances = _(state.tabInstance).keyBy('id').set(findInstance.id, findInstance).values().value()

            return {
                ...state,
                tabInstance: newInstances
            }
        }
        case ADD_TAB: {
            let findInstance = findInstanceByID(action.payload.id, state.tabInstance)
            let findDuplicate = _.find(findInstance.tabs, action.payload.tab)
            if (findDuplicate === undefined) {
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
