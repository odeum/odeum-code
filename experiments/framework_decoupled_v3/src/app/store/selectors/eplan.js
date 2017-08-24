var _ = require('lodash')

export const getConfigSel = state => state.eplan.conf

export const getAppendixSel = (state, id, props) => {
	var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
	var config = getConfigSel(state)
	var filter = null
	if (appendix && config)
	{ filter = _.intersectionBy(appendix.fields, config.editFields, 'id') }
	// console.log(filter)
	return filter ? filter : undefined
}
export const getAppendixDates = (state, id, props) => {
	var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
	var config = getConfigSel(state)
	var filter = null
	if (appendix && config)
	{ filter = _.intersectionBy(appendix.fields, config.propertiesFields, 'id') }
	console.log(filter)
	return filter ? filter : undefined
}
export const getAppendix = (state, id, props) => {
	var appendix = _.find(state.eplan.openAppendix, (appendix) => { return appendix.appendixId === parseInt(id, 10) })
	return appendix ? appendix : undefined
}

export const getReferenceTable = (state, id) => {
	var referenceTable = _.find(state.eplan.openReferenceTables, (referenceTable) => {
		return referenceTable.id === parseInt(id, 10)
	})
	return referenceTable ? referenceTable : null
}

export const getReferenceTableData = (state, id) => {
	var referenceTable = _.find(state.eplan.openReferenceTables, (referenceTable) => {
		return referenceTable.id === parseInt(id, 10)
	})
	return referenceTable ? referenceTable : null
}
export const getReferenceTableDataEntry = (state, id) => {
	if (id === undefined) {
		return {
			id: null,
			parentKey: "",
			valueKey: "",
			value: "",
			value2: ""
		}
	}
	let referenceTableData = _.find(state.eplan.openReferenceTables, (referenceTable, index) => {
		return referenceTable.id === parseInt(id, 10)
	})
	// let referenceTableDataEntry = _.find(referenceTableData, (referenceTableDataEntry) => {  
	// 	return referenceTable.id === parseInt(id, 10) 
	// })

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
	let referenceTable = _.find(state.eplan.referencetables, (referenceTable, index) => {
		return referenceTable.id === parseInt(id, 10)
	})
	return referenceTable ? referenceTable : undefined
}

export const getReferenceTableSelectValues = (state) => {
	let referenceTableSelectValues = []
	referenceTableSelectValues[referenceTableSelectValues.length] = { value: -1, label: 'ingen valgt' }
	_.forEach(state.eplan.referencetables, (e) => {
		referenceTableSelectValues[referenceTableSelectValues.length] = { value: e.id, label: e.name }
	})
	return referenceTableSelectValues
}
