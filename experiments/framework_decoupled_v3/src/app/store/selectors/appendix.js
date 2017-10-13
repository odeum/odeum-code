import { List } from 'immutable'
import { createSelector } from 'reselect'
var _ = require('lodash')

//TODO: https://github.com/reactjs/reselect/blob/master/README.md#sharing-selectors-with-props-across-multiple-components
// Memoization between all comps

const getAppendixFilterText = (state) => state.eplan.appendixFilterText
const getAppendixesRaw = (state) => state.eplan.appendixes
const getAppendixes = (state) => {
	var appendixes = List(_.map(state.eplan.appendixes))
	return appendixes
}
// export const openFrames = (state, id) =>  state.eplan.openFrames[id]
// const framesConfig = (state) => state.eplan.configFrames

const getConfig = state => state.eplan.conf
export const getAppendix = (state, id, props) => state.eplan.openAppendix[id]

export const getFilteredAppdx = createSelector(
	[getAppendixes, getAppendixFilterText],
	(appendixes, appendixFilterText) => {
		return appendixes ? (
			appendixes.filter(t => t.name.toLowerCase().includes(appendixFilterText.toLowerCase())) === [] ? [] :
				appendixes.filter(t => t.name.toLowerCase().includes(appendixFilterText.toLowerCase()))) : []
	}
)

export const getAppendixEdit = createSelector(
	[getConfig, getAppendix],
	(config, appendix) => {
		var x = appendix && config ? _.intersectionBy(appendix.fields, config.editFields, 'id') : undefined
		console.log('-----appendix-----')
		console.log(appendix)
		console.log('-----config-----')
		console.log(config)
		console.log('-----x-----')
		console.log(x)
		return appendix && config ? _.intersectionBy(appendix.fields, config.editFields, 'id') : undefined
	}
)

export const getAppendixDates = createSelector(
	[getConfig, getAppendix],
	(config, appendix) => {
		return appendix && config ? _.intersectionBy(appendix.fields, config.propertiesFields, 'id') : undefined

	}
)

// export const getFramesFields = createSelector(
// 	[framesConfig, openFrames],
// 	(config, openFrame) => {
// 		var filter = []
// 		if (openFrame && config) {
// 			filter = []
// 			_.forEach(config.editFields, function (value, key) {
// 				filter[filter.length] = openFrame.fields[key]
// 			})
// 		}
// 		return filter ? filter : undefined

// 	}
// )
const getId = (state, props) => props

//TODO: Refactor to accomodate object
export const getAppendixMetaData = createSelector(
	[getAppendixesRaw, getId],
	(appendixes, id) => {
		var appdx = null
		// appendixes.filter(t => {
		// 	return t.appendixId === parseInt(id, 10) ? appdx = t : null
		// })
		console.log(appendixes)
		console.log(id)
		appdx = appendixes[id]
		console.log('---appdx---')
		console.log(appdx)
		return appdx
	}
)

export const getAppendixStatus = createSelector(
	[getAppendix],
	(appendix) => {
		console.log('-----appendix-----')
		console.log(appendix)
		// var status = null
		return appendix ? (appendix.fields.filter(t => {
			return t.caption === 'Status'
		})
		) : null
		
	}
)