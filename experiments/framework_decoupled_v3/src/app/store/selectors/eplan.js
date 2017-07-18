var _ = require('lodash')
export const getAppendixSel = (id,state,props)=>{
    console.log(_.find(state.eplan.openAppendix,(appendix)=>{return appendix.appendixId===parseInt(id,10)}))
    return _.find(state.eplan.openAppendix,(appendix)=>{return appendix.appendixId===parseInt(id,10)})
}

