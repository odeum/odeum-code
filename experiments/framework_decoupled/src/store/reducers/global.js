import { CLOSE_TAB, ADD_TAB, LOAD_DEFAULT_TABS } from '../actions/action_types'
var config = require('../../custom_apps/config.json')


const initialState = {
    scenes: config.scenes,
    tabChildren: [],
    activeLabel: '',
    activeScene:''
}
var _ = require('lodash')

export default function global(state = initialState, action) {
    switch (action.type) {
        case LOAD_DEFAULT_TABS:{
            let sceneFind = _.find(config.scenes,function(scene){
                return scene.name=== action.payload
            })
            let dynamicTabList= _.filter(state.tabChildren,function(tab){
                 return tab.fixed===true? null : tab
                })
               //eslint-disable-next-line
             //  console.log(finder)
            return {
                ...state,
                tabChildren:sceneFind.tabs.concat(dynamicTabList),
                activeScene:sceneFind.name
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
        {    let formsArray = _.find(state.tabChildren,action.payload)
            // console.log(formsArray)
            if(formsArray!==undefined)
            return {
                ...state,
                activeLabel:action.payload.label
            }
            else
            {
                if(state.tabChildren.length===0)
                return{
                    ...state,
                    tabChildren:state.tabChildren.concat(action.payload),
                    activeLabel:action.payload.label
                }
                else
                {
                    return{
                     ...state,
                    tabChildren:state.tabChildren.concat(action.payload)
                    }
                }
            }
        }
        default:
            return state


    }

}
