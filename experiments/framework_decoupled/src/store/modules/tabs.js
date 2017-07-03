import { push } from 'react-router-redux'
import config from 'custom_apps/config.json'

const CLOSE_TAB = '@@TABS/CLOSE TAB'
const ADD_TAB = '@@TABS/ADD or UPDATE TAB'
const ACTIVE_TAB = '@@TABS/ SET ACTIVE TAB'
const LOAD_DEFAULT_TABS = '@@TABS/LOAD DEFAULT TABS'

var _ = require('lodash')

export function loadTabs(label) {
    console.log("Load Tabs",label)
    return (dispatch) => {
        dispatch({ type: LOAD_DEFAULT_TABS, payload: label })
    }
}

export function closeTab(tab) {

    return (dispatch) => {
        dispatch({ type: CLOSE_TAB, payload: tab })
        dispatch(push('/forms/list'))
    }
}

export function updateTab(tab) {
    return (dispatch) => {
        dispatch({ type: ADD_TAB, payload: tab })
    }
}

export function setActive(tab) {
    return (dispatch) => {
        dispatch({ type: ACTIVE_TAB, payload: tab })
    }
}
function sceneFinder(scenes, payload) {
    return _.find(scenes, function (scene) {
        console.log("Scene", scene)
        return scene.name === payload
    })
}
const initialState = {
    scenes: config.scenes,
    tabChildren: config.scenes[0].tabs || [],
    activeTab: '',
    activeScene: '',

}
export default function tabs(state = initialState, action) {
    switch (action.type) {
        case LOAD_DEFAULT_TABS: {
            let find = sceneFinder(state.scenes, action.payload)
            return {
                ...state,
                tabChildren: find.tabs,
                activeScene: find.name,
                activeTab: find.tabs[0].label
            }
        }
        case CLOSE_TAB:
            {
                let newTabs = state.tabChildren.filter((item) => item.label !== action.payload.label)
                let sceneFind = _.find(state.scenes, function (scene) {
                    return scene.name === state.activeScene
                })
                sceneFind.tabs = newTabs
                // let newScenes = _.unionBy([sceneFind],state.scenes,'name')
                let newScenes = _(state.scenes).keyBy('name').set(sceneFind.name, sceneFind).values().value()
                console.log(newScenes)
                return {
                    ...state,
                    scenes: newScenes,
                    tabChildren: sceneFind.tabs,
                    activeTab: state.tabChildren[0].label
                }
            }
        case ADD_TAB: {
            //This finds the tab in the current active tab list so it doesn't duplicate
            let formsArray = _.find(state.tabChildren, action.payload)
            //console.log(formsArray)
            //If it finds it it will set it as active (RRR will render it)
            if (formsArray !== undefined)
                return {
                    ...state,
                    activeTab: action.payload.label
                }
            //if it doesn't find anything:
            else {
                //if the tabswrapper is empty it will search in the config for the scene the tab loaded it belongs to
                if (state.tabChildren.length === 0) {
                    let sceneFinder = _.find(state.scenes, function (scene) {
                        return action.payload.location.includes(scene.name.toLowerCase())
                    })
                    console.log(sceneFinder)
                    //if it does find the scene
                    if (sceneFinder !== undefined) {    //it will load the tabs from from the scene
                        let completeScenes = sceneFinder.tabs.concat(action.payload)
                        return {
                            ...state,
                            tabChildren: state.tabChildren.concat(completeScenes),
                            activeTab: action.payload.label
                        }
                    }
                    else {
                        //if it doesn't find any scene, it will just add the tab
                        return {
                            ...state,
                            tabChildren: state.tabChildren.concat(action.payload),
                            activeTab: action.payload.label
                        }
                    }
                }
                //if the tabswrapper is not empty, it will concatenate the tab to the actual list of tabs
                else {
                    let newTabs = state.tabChildren.concat(action.payload)
                    let sceneFind = _.find(state.scenes, function (scene) {
                        return scene.name === state.activeScene
                    })
                    sceneFind.tabs = newTabs
                    // let newScenes = _.unionBy([sceneFind],state.scenes,'name')
                    let newScenes = _(state.scenes).keyBy('name').set(sceneFind.name, sceneFind).values().value()
                    console.log(newScenes)
                    return {
                        ...state,
                        scenes: newScenes,
                        tabChildren: sceneFind.tabs,
                        activeTab: action.payload.label
                    }
                }
            }
        }
        case ACTIVE_TAB: {
            return {
                ...state,
                activeTab: action.payload.label
            }
        }
        default: return state
    }
}