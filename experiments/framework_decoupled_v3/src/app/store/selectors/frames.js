import { createSelector } from 'reselect'
import { List } from 'immutable'
var _ = require('lodash')

// export const getAppendix = (state, id, props) => _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
const getAppendixFrames = (state, id, props) => _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) }) || null
const getFramesFilterText = (state) => state.eplan.framesTableFilterText
export const openFrames = (state, id) => state.eplan.openFrames[id]
const framesConfig = (state) => state.eplan.configFrames
// const getFrames = (state) => state.eplan.openAppendix

export const getFilteredFrames = createSelector(
	[getAppendixFrames, getFramesFilterText],
	(framesTable, FilterText) => {
		return List(framesTable ? (
			framesTable.frames.filter(t => t.name.toLowerCase().includes(FilterText.toLowerCase())) === [] ? [] :
				framesTable.frames.filter(t => t.name.toLowerCase().includes(FilterText.toLowerCase()))) : []
		)
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
const getId = (state, id, props) => props
export const getFrameMetaData = createSelector(
	[getFilteredFrames, getId],
	(frames, id) => {
		console.log('-----id-----')
		console.log(id)
		console.log(frames[id])
		//	return frames[id]
	}
)