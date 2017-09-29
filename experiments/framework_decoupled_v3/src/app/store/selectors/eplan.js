import { List } from 'immutable'
import { createSelector } from 'reselect'
var _ = require('lodash')
//TODO: Rename to Refs selectors
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
