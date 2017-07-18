var _ = require('lodash')

const getConfigSel = state => state.eplan.config
export const getAppendixSel = (state,id,props)=>{
    // A dirty way of handling an async await, must rethink another way
    var appendix= _.find(state.eplan.openAppendix,(appendix)=>{return appendix.appendixId===parseInt(id,10)})
    if(appendix)
        {
            appendix.fields = _.intersectionBy(appendix.fields,getConfigSel(state).editFields,'id')
        }
        return appendix
    }
