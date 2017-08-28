
import { getAppendixList, getAppendixById, getAppendixConfig, postAppendix, exportAppendixToPlansystem, getReferenceTableList, getReferenceTableEntry, saveReferenceTable, saveReferenceTableValue, getFrameConfig, getFrameData, setFrameData } from 'app/data/eplan' //getAppendixFramesList
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
const GET_APPENDIX_FRAME_CONFIG = '@@EPLAN/GET_APPENDIX_FRAME_CONFIG'
const GET_APPENDIX_FRAME_DATA = '@@EPLAN/GET_APPENDIX_FRAME_DATA'
const SET_APPENDIX_FRAME_DATA = '@@EPLAN/SET_APPENDIX_FRAME_DATA'
const GET_REFERENCE_TABLE_LIST = '@@EPLAN/GET_REFERENCE_TABLE_LIST'
const GET_REFERENCE_TABLE_ENTRY = '@@EPLAN/GET_REFERENCE_TABLE_ENTRY'
const UPDATE_REFERENCE_TABLE = '@@EPLAN/UPDATE_REFERENCE_TABLE'
const UPDATE_REFERENCE_TABLE_DATA = '@@EPLAN/UPDATE_REFERENCE_TABLE_DATA'
const APPENDIX_IS_SAVING = '@@EPLAN/APPENDIX_IS_SAVING'
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
const actionGetFrameConfig = (data) => ({ type: GET_APPENDIX_FRAME_CONFIG, payload: data })
const actionGetFrameData = (data) => ({ type: GET_APPENDIX_FRAME_DATA, payload: data })
const actionSetFrameData = (data) => ({ type: SET_APPENDIX_FRAME_DATA, payload: data })
const getRefTableList = (data) => ({ type: GET_REFERENCE_TABLE_LIST, payload: data })
const getRefTableEntry = (data) => ({ type: GET_REFERENCE_TABLE_ENTRY, payload: data })
const updateRefTable = (data) => ({ type: UPDATE_REFERENCE_TABLE, payload: data })
const updateRefTableData = (data) => ({ type: UPDATE_REFERENCE_TABLE_DATA, payload: data })
const appendixIsSaving = () => ({ type: APPENDIX_IS_SAVING })
/* Middleware */
export function removeOpenApdx(id) {
	return dispatch => {
		dispatch(removeApdx(id))
	}
}

export async function updateAppendix(appendix, id, commit) {
	return dispatch => {
		dispatch(appendixIsSaving())
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
export function getFrameDataAsync(id) {
	return async dispatch => {
		await getFrameData(id).then((result) => {
			dispatch(actionGetFrameData(result))
		})

	}
}
export function setFrameDataAsync(frameId, fields, openFrame) {
	let newFields = {}
	_.forEach(fields, function(value, key) {
		newFields[value.id] = value
	})

	return async dispatch => {
		dispatch(actionSetFrameData({ frameId, fields }))
		await setFrameData(frameId, {
			...openFrame,
			fields: {
				...openFrame.fields,
				...newFields
			}
		}).then((result) => {
			// dispatch(actionGetFrameData(result))
		})

	}
}
export function getFrameConfigAsync() {
	return async dispatch => {
		await getFrameConfig().then((result) => {
			dispatch(actionGetFrameConfig(result))
		})

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
	return async dispatch => {
		var data = await saveReferenceTable(referenceTable)
		console.log(data)
		dispatch(updateRefTable({ referenceTable: data }))
	}
		
}
export function updateReferenceTableData(referenceTableEntry, id) {
	return async dispatch => {
		await saveReferenceTableValue(referenceTableEntry).then(
			(referenceTableEntry) => {
				dispatch(updateRefTableData({ referenceTableEntry }))
			}
		)
	}
}

/* Reducer */
const initState = {
	appendixes: List([]),
	openAppendix: [],
	openFrames: [],
	configFrames: [],
	// referencetables: [],
	// openReferenceTables: [],
	referenceTables: [],
	referenceTableValues: [],
	isLoading: true,
	framesIsLoading: true,
	referencetablesIsLoading: true,
	referenceTablesEntryIsLoading: true,
	conf: null,
	appendixIsSaving: false
}

function eplan(state = initState, action) {
	switch (action.type) {
		case CLOSE_APPENDIX: {
			return {
				...state,
				openAppendix: state.openAppendix.filter((item) => item === action.payload)
			}
		}
		case APPENDIX_IS_SAVING:
			return {
				...state,
				appendixIsSaving: true
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
			return {
				...state,
				appendixIsSaving: false
			}
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
			return {
				...state,
				appendixes: action.payload,
				framesIsLoading: false
			}
		case GET_APPENDIX_FRAME_CONFIG:
			return {
				...state,
				configFrames: action.payload
			}
		case GET_APPENDIX_FRAME_DATA:
			return {
				...state,
				openFrames: {
					...state.openFrames,
					[action.payload.frameId]: action.payload
				}
			}
		case SET_APPENDIX_FRAME_DATA:
			let newFields = {}
			_.forEach(action.payload.fields, function(value, key) {
				newFields[value.id] = value
			})
			return {
				...state,
				openFrames: {
					...state.openFrames,
					[action.payload.frameId]: {
						...state.openFrames[action.payload.frameId],
						fields: {
							...state.openFrames[action.payload.frameId].fields,
							...newFields
						}
					}
				}
			}
		case GET_REFERENCE_TABLE_LIST:
			return {
				...state,
				referenceTables: action.payload,
				referencetablesIsLoading: false
			}
		case GET_REFERENCE_TABLE_ENTRY:
			return {
				...state,
				referenceTableValues: {
					...state.referenceTableValues,
					[action.payload.id]: action.payload
				},
				referenceTablesEntryIsLoading: false
			}
		case UPDATE_REFERENCE_TABLE:
			return {
				...state,
				referenceTables: {
					...state.referenceTables,
					[action.payload.referenceTable.id]: action.payload.referenceTable.id
				}
			}
		case UPDATE_REFERENCE_TABLE_DATA:
			return {
				...state,
				referenceTableValues: {
					...state.referenceTableValues,
					[action.payload.referenceTableEntry.reftableId]: {
						...state.referenceTableValues[action.payload.referenceTableEntry.reftableId],
						data: {
							...state.referenceTableValues[action.payload.referenceTableEntry.reftableId].data,
							[action.payload.referenceTableEntry.id]: action.payload.referenceTableEntry
						}
					}
				}
			}
		default:
			return state
	}
}

export default eplan
