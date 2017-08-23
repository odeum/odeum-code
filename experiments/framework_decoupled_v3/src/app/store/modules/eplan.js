
import { getAppendixList, getAppendixById, getAppendixConfig, postAppendix, exportAppendixToPlansystem, getReferenceTableList, getReferenceTableEntry } from 'app/data/eplan' //getAppendixFramesList
import { List } from 'immutable'

/*Lodash*/
var _ = require('lodash')

/* Action Types */

const GET_APPENDIX_LIST = '@@EPLAN/GET_EPLAN_LIST'
const GET_APPENDIX = '@@EPLAN/GET_APPENDIX'
const GET_APPENDIX_CONFIG = '@@EPLAN/GET_APPENDIX_CONFIG'
const UPDATE_APPENDIX = '@@EPLAN/UPDATE_APPENDIX'
const CLOSE_APPENDIX = '@@EPLAN/CLOSE_OPEN_APPENDIX'
const PUBLISH_APPENDIX_PLANSYSTEM = '@@EPLAN/PUBLISH_APPENDIX_PLANSYSTEM'
const GET_APPENDIX_PDF = '@@EPLAN/GET_APPENDIX_PDF'
const CREATE_APPENDIX_PDF = '@@EPLAN/CREATE_APPENDIX_PDF'
const GET_APPENDIX_FRAMES_LIST = '@@EPLAN/GET_APPENDIX_FRAMES_LIST'
const GET_REFERENCE_TABLE_LIST = '@@EPLAN/GET_REFERENCE_TABLE_LIST'
const GET_REFERENCE_TABLE_ENTRY = '@@EPLAN/GET_REFERENCE_TABLE_ENTRY'
const UPDATE_REFERENCE_TABLE = '@@EPLAN/UPDATE_REFERENCE_TABLE'
const ADD_REFERENCE_TABLE = '@@EPLAN/ADD_REFERENCE_TABLE'
const UPDATE_REFERENCE_TABLE_DATA = '@@EPLAN/UPDATE_REFERENCE_TABLE_DATA'

/* Actions */
const getList = (data) => ({ type: GET_APPENDIX_LIST, payload: data })
const getAppendix = (data) => ({ type: GET_APPENDIX, payload: data })
const getApdCfg = (data) => ({ type: GET_APPENDIX_CONFIG, payload: data })
const updateApd = (data) => ({ type: UPDATE_APPENDIX, payload: data })
const removeApdx = (data) => ({ type: CLOSE_APPENDIX, payload: data })
const exportAppendix = () => ({ type: PUBLISH_APPENDIX_PLANSYSTEM })
const getAppendixPdf = () => ({ type: GET_APPENDIX_PDF })
const createAppendixPdf = () => ({ type: CREATE_APPENDIX_PDF })
const getFramesList = (data) => ({ type: GET_APPENDIX_FRAMES_LIST, payload: data })
const getRefTableList = (data) => ({ type: GET_REFERENCE_TABLE_LIST, payload: data })
const getRefTableEntry = (data) => ({ type: GET_REFERENCE_TABLE_ENTRY, payload: data })
const updateRefTable = (data) => ({ type: UPDATE_REFERENCE_TABLE, payload: data })
const addRefTable = (data) => ({ type: ADD_REFERENCE_TABLE, payload: data })
const updateRefTableData = (data) => ({ type: UPDATE_REFERENCE_TABLE_DATA, payload: data })

/* Middleware */
export function removeOpenApdx(id) {
	return dispatch => {
		dispatch(removeApdx(id))
	}
}

export function updateAppendix(appendix, id, commit) {
	return dispatch => {
		dispatch(updateApd({ appendix, id, commit }))
	}
}

export function getAppendixAsync(id) {
	return async dispatch => {
		await getAppendixById(id).then((result) => {
			dispatch(getAppendix(result))
		})

	}
}

export function getListAsync() {
	return async dispatch => {
		await getAppendixList().then(
			(result) => {
				dispatch(getList(result))
			}
		)
	}
}

export function getFramesListAsync(id) {
	return async dispatch => {
		await getAppendixList().then(
			(result) => {
				dispatch(getFramesList(result))
			}
		)
	}
}

export function getAppendixCfg() {
	return async dispatch => {
		await getAppendixConfig().then((result) => {
			dispatch(getApdCfg(result))
		})

	}
}

export async function exportAppendixToPlansystemAsync(id) {

	return async dispatch => {
		var test = await exportAppendixToPlansystem(id).then((result) => {
			dispatch(exportAppendix())
			return result
		})
		return test
	}
}

export async function getAppendixPdfAsync() {
	return async dispatch => {
		//TODO
		var test = []
		dispatch(getAppendixPdf())
		return test
	}
}

export async function createAppendixPdfAsync() {
	return async dispatch => {
		//TODO
		var ret = []
		dispatch(createAppendixPdf())
		return ret
	}
}

export function getReferenceTableListAsync() {
	return async dispatch => {
		await getReferenceTableList().then(
			(result) => {
				dispatch(getRefTableList(result))
			}
		)
	}
}

export function getReferenceTableEntryAsync(id) {
	return async dispatch => {
		await getReferenceTableEntry(id).then(
			(result) => {
				dispatch(getRefTableEntry(result))
			}
		)
	}
}

export function updateReferenceTable(referenceTable, id) {
	return dispatch => {
		dispatch(updateRefTable({ referenceTable, id }))
	}
}

export function addReferenceTable(referenceTable) {
	return dispatch => {
		dispatch(addRefTable({ referenceTable }))
	}
}

export function updateReferenceTableData(referenceTableEntry, id) {
	return dispatch => {
		dispatch(updateRefTableData({ referenceTableEntry, id }))
	}
}


/* Reducer */
const initState = {
	appendixes: List([]),
	openAppendix: [],
	referencetables: [],
	openReferenceTables: [],
	isLoading: true,
	framesIsLoading: true,
	referencetablesIsLoading: true,
	referenceTablesEntryIsLoading: true,
	conf: null
}

function eplan(state = initState, action) {
	switch (action.type) {
		case CLOSE_APPENDIX: {
			return {
				...state,
				openAppendix: state.openAppendix.filter((item) => item === action.payload)
			}
		}
		case UPDATE_APPENDIX:
		{
			let orig = state.openAppendix.find((apdx) => (apdx.appendixId === parseInt(action.payload.id, 10)))
			orig.fields.map((field) => {
				return action.payload.appendix.fields.map((afield) => {
					return field.id === afield.id ? field.value = afield.value : field
				})
			})
			postAppendix(orig, action.payload.commit)
			return state
		}
		case GET_APPENDIX_CONFIG:
		{
			return {
				...state,
				conf: action.payload
			}
		}
		case GET_APPENDIX_LIST:
			return {
				...state,
				appendixes: action.payload,
				isLoading: false
			}
		case GET_APPENDIX:
		{
			var findAppendix = _.find(state.openAppendix, (apdx) => (apdx.appendixId === action.payload.appendixId))
			if (findAppendix !== undefined) 
				return state 
			else return {
				...state,
				openAppendix: state.openAppendix.concat(action.payload),
				framesIsLoading: false
			}
		}
		case GET_APPENDIX_FRAMES_LIST:
			// console.log(action.payload)
			return {
				...state,
				appendixes: action.payload,
				framesIsLoading: false
			}
		case GET_REFERENCE_TABLE_LIST:
			// console.log(action.payload)
			return {
				...state,
				referencetables: action.payload,
				referencetablesIsLoading: false
			}
		case GET_REFERENCE_TABLE_ENTRY:
			// console.log(action.payload)
			// console.log(action.payload.ownerID)
			return {
				...state,
				openReferenceTables: state.openReferenceTables.concat(action.payload),
				referenceTablesEntryIsLoading: false
			}
		case UPDATE_REFERENCE_TABLE:
			// TODO: Submit to server
			return {
				...state,
				referencetables: state.referencetables.map(
					(referencetable) => referencetable.id === parseInt(action.payload.id, 10) ? action.payload.referenceTable : referencetable
				) 
			}
		case ADD_REFERENCE_TABLE:
			// TODO: Submit to server
			action.payload.referenceTable.id = 1234
			return {
				...state,
				referencetables: state.referencetables.concat(action.payload.referenceTable) 
			}
		case UPDATE_REFERENCE_TABLE_DATA:
			// TODO: Submit to server
			console.log('UPDATE_REFERENCE_TABLE_DATA')
			console.log(action.payload)
			return {
				...state,
				openReferenceTables: state.openReferenceTables.map(
					(referencetable) => 
					{
						console.log(referencetable)
						// if (referencetable.id === parseInt(action.payload.id, 10)) {
							
						// 	referencetable.data.map((dataEntry) => {
						// 		return dataEntry
						// 	})
						// }
						return referencetable
					}
					// referencetable.id === parseInt(action.payload.id, 10) ? action.payload.referenceTable : referencetable
				) 
			}
		default:
			return state
	}
}

export default eplan
