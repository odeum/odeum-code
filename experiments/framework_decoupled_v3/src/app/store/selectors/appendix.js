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
		if (appendix && config) {
			var editFields = {}
			for (var field in config.editFields) {
				editFields[field] = appendix.fields[field]
			}
			return editFields
		}
		else return undefined
	}
)

export const getAppendixDates = createSelector(
	[getConfig, getAppendix],
	(config, appendix) => {
		return appendix && config ? _.intersectionBy(appendix.fields, config.propertiesFields, 'id') : undefined

	}
)


const getId = (state, props) => props

//TODO: Refactor to accomodate object
export const getAppendixMetaData = createSelector(
	[getAppendixesRaw, getId],
	(appendixes, id) => {
		var appdx = null

		appdx = appendixes[id]

		return appdx
	}
)

export const getAppendixStatus = createSelector(
	[getAppendix],
	(appendix) => {
		console.log('-----appendix-----')
		console.log(appendix)
		return appendix ? (appendix.fields.filter(t => {
			return t.caption === 'Status'
		})
		) : null

	}
)