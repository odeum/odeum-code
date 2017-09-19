import { List } from 'immutable'
import { createSelector } from 'reselect'
var _ = require('lodash')

export const getConfigSel = state => state.eplan.conf
const getReferenceTableFilterText = state => state.eplan.referenceTableFilterText
export const getReferences = (state) => {
	var referenceTable = List(_.map(state.eplan.referenceTables))
	return referenceTable
}

export const getFilteredRefs = createSelector(
	[getReferences, getReferenceTableFilterText],
	(refs, text) => {
		return refs ? (
			refs.filter(t => t.name.toLowerCase().includes(text.toLowerCase())) === [] ? [] :
				refs.filter(t => t.name.toLowerCase().includes(text.toLowerCase()))) : []
	}
)
export const getReferenceTable = (state, id) => {
	var referenceTable = _.find(state.eplan.openReferenceTables, (referenceTable) => {
		return referenceTable.id === parseInt(id, 10)
	})
	return referenceTable ? referenceTable : null
}

export const getReferenceTableValues = (state, id) => {
	let referenceTableData = state.eplan.referenceTableValues ? state.eplan.referenceTableValues[id] : null
	return referenceTableData ? referenceTableData : null
}
export const getReferenceTableDataEntry = (state, id, referenceTableId) => {
	if (id === undefined) {
		return {
			id: null,
			parentKey: "",
			valueKey: "",
			value: "",
			value2: ""
		}
	}
	let referenceTableData = state.eplan.referenceTablesValues[referenceTableId].data[id]
	return referenceTableData ? referenceTableData : undefined
}


export const getReferenceTableEntry = (state, id) => {
	if (id === undefined) {
		return {
			id: null,
			parentReftableId: -1,
			name: "",
			sqlTable: "",
			field1Type: 2,
			field2Type: 0,
			fieldType: 1
		}
	}
	let referenceTable = state.eplan.referenceTables[id]
	return referenceTable ? referenceTable : undefined
}

export const getReferenceTableSelectValues = (state) => {
	let referenceTableSelectValues = []
	referenceTableSelectValues[referenceTableSelectValues.length] = { value: -1, label: 'ingen valgt' }
	_.forEach(state.eplan.referenceTables, (e) => {
		referenceTableSelectValues[referenceTableSelectValues.length] = { key: e.id, value: e.id, label: e.name }
	})
	return referenceTableSelectValues
}
/* 
export const getAppendixSel = (state, id, props) => {
	var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
	var config = getConfigSel(state)
	var filter = null
	if (appendix && config) { filter = _.intersectionBy(appendix.fields, config.editFields, 'id') }
	// console.log(filter)
	return filter ? filter : undefined
} */

/* export const getAppendixCreateSel = (state, id, props) => {
	var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
	var config = getConfigSel(state)
	var filter = null
	if (appendix && config) { filter = _.intersectionBy(appendix.fields, config.createFields, 'id') }
	console.log(filter)
	return filter ? filter : undefined
} */
/* 
export const getAppendixDates = (state, id, props) => {
	var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
	var config = getConfigSel(state)
	var filter = null
	if (appendix && config) { filter = _.intersectionBy(appendix.fields, config.propertiesFields, 'id') }
	// console.log(filter)
	return filter ? filter : undefined
}
export const getAppendix = (state, id, props) => {
	var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
	return appendix ? appendix : undefined
} */
/* 
export const getFrameFieldsSel = (state, id) => {
	let openFrame = state.eplan.openFrames[id]
	var config = state.eplan.configFrames
	var filter = null
	if (openFrame && config) {
		filter = []
		_.forEach(config.editFields, function (value, key) {
			filter[filter.length] = openFrame.fields[key]
		})
	}
	// console.log(filter)
	return filter ? filter : undefined
}
 */
/* 
const getFilterText = (state) => state.eplan.filterText
const getAppendixes = (state) => state.eplan.appendixes

export const getFilteredAppdx = createSelector(
	[getAppendixes, getFilterText],
	(appendixes, filterText) => {
		// console.log(appendixes, filterText)
		if (appendixes) {
			var filtered = appendixes.filter(t => t.name.includes(filterText))
			console.log('filter', filtered)
			return (
				filtered === [] ? [] : filtered)
		}
		else
			return []
	}
) */
