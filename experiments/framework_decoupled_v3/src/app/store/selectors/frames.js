import { createSelector } from 'reselect'
import { List } from 'immutable'
var _ = require('lodash')

// export const getAppendix = (state, id, props) => _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
const getAppendixFrames = (state, id, props) => _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) }) || null
const getFramesFilterText = (state) => state.eplan.framesTableFilterText

export const getFilteredFrames = createSelector(
	[getAppendixFrames, getFramesFilterText],
	(framesTable, FilterText) => {
		// console.log('filtered', framesTable.frames.filter(t => t.name.toLowerCase().includes(FilterText.toLowerCase())))
		return List(framesTable ? (
			framesTable.frames.filter(t => t.name.toLowerCase().includes(FilterText.toLowerCase())) === [] ? [] :
				framesTable.frames.filter(t => t.name.toLowerCase().includes(FilterText.toLowerCase()))) : []
		)}
)