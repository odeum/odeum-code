var _ = require('lodash')

export const getConfigSel = state => state.eplan.conf

export const getAppendixSel = (state, id, props) => {
    var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
    var config = getConfigSel(state)
    var filter = null
    if (appendix && config)
    { filter = _.intersectionBy(appendix.fields, config.editFields, 'id') }
    return filter ? filter : undefined
}

export const getAppendix = (state, id, props) => {
    var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
    return appendix ? appendix : undefined
}