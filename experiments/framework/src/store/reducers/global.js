import { CHANGE_TAB, CLOSE_TAB, ADD_TAB } from '../actions/action_types'
// import { LOCATION_CHANGE } from 'react-router-redux'

import * as constant from './constants'
const initialState = {
    scenes: constant.scenes,
    tabChildren: [],
    activeLabel: ''
}
var _ = require('lodash')

export default function global(state = initialState, action) {

    switch (action.type) {
        case 'LOAD_TABS_DASHBOARD':
            {

                // console.log('------------------------------------')
                // console.log(constant.defaultTabs.filter((item) => item.label === state.activeLabel))
                // console.log(state.activeLabel)
                // console.log('------------------------------------')
                // Example of adding a tab that isn't part of the default ones, instead of giving it fixed values, it can be passed as payload
                // if (constant.defaultTabs.filter((item) => item.label === state.activeLabel).length===0&&state.activeLabel!=='Dashboard')
                // {
                // return {
                //     ...state,
                //     tabChildren: constant.defaultTabs.concat({label:action.payload.label,icon:action.payload.icon,location:'/dashboard/'+action.payload.label,fixed:false})
                // }}
                // else

                if (state.tabChildren.length === 0) {
                    // console.log('Empty')
                    return {
                        ...state,
                        tabChildren: constant.defaultTabs
                    }
                }
                else {

                    let newArray2 = _.reduce(state.tabChildren, function (result, value, key) {
                        //  console.log(value)
                        //  console.log(value.fixed)
                        return value.fixed ? result : result.concat(state.tabChildren[key])
                    }, [])
                    // console.log(newArray2)
                    return {
                        ...state,
                        tabChildren: constant.defaultTabs.concat(newArray2)
                    }
                }
                // return {
                //     ...state,
                //     tabChildren: state.tabChildren
                // }
            }
        case 'LOAD_TABS_FORMS':
            {
                if (state.tabChildren.length === 0) {
                    // console.log('Forms Tab Empty, Loading default tabs')
                    return {
                        ...state,
                        tabChildren: constant.formsTabs,
                        activeLabel: 'Forms'
                    }
                }
                else {
                    let formsArray = _.reduce(state.tabChildren, function (result, value, key) {
                        // console.log(_.isEqual(value, constant.formsTabs[key]))
                        return value.fixed ? result : result.concat(state.tabChildren[key])
                    }, [])
                    // console.log(formsArray)
                    return {
                        ...state,
                        tabChildren: constant.formsTabs.concat(formsArray),
                        activeLabel: 'Forms'
                    }
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
        case 'LOAD_LABEL':
        {    let formsArray = _.find(state.tabChildren,action.payload)
            console.log(formsArray)
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
