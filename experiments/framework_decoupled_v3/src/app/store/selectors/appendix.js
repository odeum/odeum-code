// import { List } from 'immutable'
import { createSelector } from 'reselect'
var _ = require('lodash')

const getAppendixFilterText = (state) => state.eplan.appendixFilterText
const getAppendixes = (state) => state.eplan.appendixes

const openFrames = (state, id) => state.eplan.openFrames[id]
const framesConfig = (state) => state.eplan.configFrames

const getConfig = state => state.eplan.conf
export const getAppendix = (state, id, props) => _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })

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
		return appendix && config ? _.intersectionBy(appendix.fields, config.editFields, 'id') : undefined
	}
)

export const getAppendixDates = createSelector(
	[getConfig, getAppendix],
	(config, appendix) => {
		return appendix && config ? _.intersectionBy(appendix.fields, config.propertiesFields, 'id') : undefined

	}
)

export const getFramesFields = createSelector(
	[framesConfig, openFrames],
	(config, openFrame) => {
		var filter = []
		if (openFrame && config) {
			filter = []
			_.forEach(config.editFields, function (value, key) {
				filter[filter.length] = openFrame.fields[key]
			})
		}
		return filter ? filter : undefined

	}
)