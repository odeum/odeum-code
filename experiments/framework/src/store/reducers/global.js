import { CLOSE_TAB, ADD_TAB, LOAD_DEFAULT_TABS } from '../actions/action_types'
var config = require('../../custom_apps/config.json')


const initialState = {
    scenes: config.scenes,
    tabChildren: [],
    activeLabel: ''
}
var _ = require('lodash')

export default function global(state = initialState, action) {
    switch (action.type) {
        case LOAD_DEFAULT_TABS:{
            let sceneFind = _.find(config.scenes,function(scene){
                return scene.name=== action.payload
            })
            return {
                ...state,
                tabChildren:sceneFind.tabs
            }
        }
     /*   case 'LOAD_TABS_DASHBOARD':
            {

                if (state.tabChildren.length === 0) {
                    return {
                        ...state,
                        tabChildren: config.scenes[0].tabs
                    }
                }
                else {

                    let newArray2 = _.reduce(state.tabChildren, function (result, value, key) {
                        return value.fixed ? result : result.concat(state.tabChildren[key])
                    }, [])
                    return {
                        ...state,
                        tabChildren: config.scenes[0].tabs.concat(newArray2)
                    }
                }
            }
        case 'LOAD_TABS_FORMS':
            {
                if (state.tabChildren.length === 0) {
                    return {
                        ...state,
                        tabChildren: constant.formsTabs,
                        activeLabel: 'Forms'
                    }
                }
                else {
                    let formsArray = _.reduce(state.tabChildren, function (result, value, key) {
                        return value.fixed ? result : result.concat(state.tabChildren[key])}, [])
                    return {
                        ...state,
                        tabChildren: constant.formsTabs.concat(formsArray),
                        activeLabel: 'Forms'
                    }
                }
            }
        case CHANGE_TAB:
            {//DEPRECATED
                return {
                    ...state,
                    activeLabel: action.payload
                }
            }
*/
        case CLOSE_TAB:
            {
               
                return {
                    ...state,
                    tabChildren: state.tabChildren.filter((item) => item.label !== action.payload.label)
                }
            }

            //TODO Rename LOAD_LABEL as ADD_TAB
        case ADD_TAB:
        {    let formsArray = _.find(state.tabChildren,action.payload)
            if(formsArray!==undefined)
            return {
                ...state,
                activeLabel:action.payload.label
            }
            else
            {
                return{
                    ...state,
                    tabChildren:state.tabChildren.concat(action.payload),
                    activeLabel:action.payload.label
                }
            }
        }
        default:
            return state


    }

}
