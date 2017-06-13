import { CLOSE_TAB, ADD_TAB, LOAD_DEFAULT_TABS } from '../actions/action_types'

var config = require('../../custom_apps/config.json')


//TODO Classnames for actions
//TODO Array for each scene, not a general one

const initialState = {
    scenes: config.scenes,
    tabChildren: config.scenes[0].tabs || [],
    activeTab: '',
    activeScene: '',

}
var _ = require('lodash')
//
export default function global(state = initialState, action) {
    switch (action.type) {
        case LOAD_DEFAULT_TABS: {

            let sceneFind = _.find(state.scenes, function (scene) {
                return scene.name === action.payload
            })
            //let newScenes = state.scenes.splice(_.findIndex(sceneFind))
            //  console.log(newScenes)
            // let dynamicTabList = _.filter(state.tabChildren, function (tab) {
            //     return tab.fixed === true ? null : tab
            // })
            return {
                ...state,
                tabChildren: sceneFind.tabs,
                activeScene: sceneFind.name,
                activeTab: sceneFind.tabs[0].label
            }
        }
        //TODO Go Back on 
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

        case ADD_TAB:
            {
                //TODO This needs a rethinking, probably use LOCATION_CHANGE
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
                            scenes:newScenes,
                            tabChildren: sceneFind.tabs,
                            activeTab: action.payload.label
                        }
                    }
                }
            }
            case 'SET_ACTIVE':
            return{
            ...state,
            activeTab:action.payload.label
            }
        default:
            return state


    }

}
