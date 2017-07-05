import {createSelector} from 'reselect'
var _ = require('lodash')

export const getInstance=(state,props)=> _.find(state.tabs.tabInstance,function (instance) {
   return instance.id === props.id ? instance: null
})

export const makeGetTabInstance = () =>{
    return createSelector(
        [getInstance],
        (tabInstance) =>{
            return tabInstance
        }
    )
}

