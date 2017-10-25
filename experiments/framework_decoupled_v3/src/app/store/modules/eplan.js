import {
	api, getAppendixList, getAppendixById,
	getAppendixConfig, postAppendix, addAppendix,
	exportAppendixToPlansystem, getReferenceTableList,
	getReferenceTableEntry, saveReferenceTable,
	saveReferenceTableValue, deleteReferenceTableValue,
	getFrameConfig, getFrameData, setFrameData, backendLogin,
	getAuth, addNewFrame, exportFrameToPlansystem
} from 'app/data/eplan'
import { push } from 'react-router-redux'
import { List, Map } from 'immutable'
import Cookies from 'universal-cookie'

/*Lodash*/
var _ = require('lodash')

//region Action Types

const GET_APPENDIX_LIST = '@@EPLAN/GET_EPLAN_LIST'
const GET_APPENDIX = '@@EPLAN/GET_APPENDIX'
const GET_APPENDIX_CONFIG = '@@EPLAN/GET_APPENDIX_CONFIG'
const UPDATE_APPENDIX = '@@EPLAN/UPDATE_APPENDIX'
const ADD_APPENDIX = '@@EPLAN/ADD_APPENDIX'
const CLOSE_APPENDIX = '@@EPLAN/CLOSE_OPEN_APPENDIX'
const PUBLISH_APPENDIX_PLANSYSTEM = '@@EPLAN/PUBLISH_APPENDIX_PLANSYSTEM'
const PUBLISH_FRAME_PLANSYSTEM = '@@EPLAN/PUBLISH_FRAME_PLANSYSTEM'
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
const DELETE_REFERENCE_TABLE_DATA = '@@EPLAN/DELETE_REFERENCE_TABLE_DATA'
const APPENDIX_IS_SAVING = '@@EPLAN/APPENDIX_IS_SAVING'
const APPENDIX_IS_LOADING = '@@EPLAN/APPENDIX_IS_LOADING'
const APDX_SET_FILTER_TEXT = '@@EPLAN/APPENDIX_LIST_FILTER'
const REF_SET_FILTER_TEXT = '@@EPLAN/REFTABLE_LIST_FILTER'
const FRAME_SET_FILTER_TEXT = '@@EPLAN/FRAMETABLE_LIST_FILTER'

const EPLAN_LOGIN = '@@EPLAN/EPLAN_LOGIN'
const EPLAN_DOING_LOGIN = '@@EPLAN/EPLAN_DOING_LOGIN'
const EPLAN_LOGIN_FAIL = '@@EPLAN/EPLAN_LOGIN_FAIL'

// const REFERENCE_TABLE_IS_LOADING = '@@EPLAN/REF_TABLE_IS_LOADING'
//endregion

//region Actions

/* Login */
const eplanLogin = (data) => ({ type: EPLAN_LOGIN, payload: data })
const eplanDoingLogin = (data) => ({ type: EPLAN_DOING_LOGIN, payload: data })
const eplanLoginFail = (data) => ({ type: EPLAN_LOGIN_FAIL, payload: data })

/*Appendixes */
const getList = (data) => ({ type: GET_APPENDIX_LIST, payload: data })
const getAppendix = (data) => ({ type: GET_APPENDIX, payload: data })
const getApdCfg = (data) => ({ type: GET_APPENDIX_CONFIG, payload: data })
const updateApd = (data) => ({ type: UPDATE_APPENDIX, payload: data })
const addApd = (data) => ({ type: ADD_APPENDIX, payload: data })
const removeApdx = (data) => ({ type: CLOSE_APPENDIX, payload: data })
const exportAppendix = () => ({ type: PUBLISH_APPENDIX_PLANSYSTEM })
const exportFrame = () => ({ type: PUBLISH_FRAME_PLANSYSTEM })
const getAppendixPdf = () => ({ type: GET_APPENDIX_PDF })
const createAppendixPdf = () => ({ type: CREATE_APPENDIX_PDF })
const getFramesList = (data) => ({ type: GET_APPENDIX_FRAMES_LIST, payload: data })
const actionGetFrameConfig = (data) => ({ type: GET_APPENDIX_FRAME_CONFIG, payload: data })
const actionGetFrameData = (data) => ({ type: GET_APPENDIX_FRAME_DATA, payload: data })
const actionSetFrameData = (data) => ({ type: SET_APPENDIX_FRAME_DATA, payload: data })
const appendixIsSaving = () => ({ type: APPENDIX_IS_SAVING })
const appendixIsLoading = (id, data) => ({ type: APPENDIX_IS_LOADING, payload: { id: id, isLoading: data } })

/* References */
const getRefTableList = (data) => ({ type: GET_REFERENCE_TABLE_LIST, payload: data })
const getRefTableEntry = (data) => ({ type: GET_REFERENCE_TABLE_ENTRY, payload: data })
const updateRefTable = (data) => ({ type: UPDATE_REFERENCE_TABLE, payload: data })
const updateRefTableData = (data) => ({ type: UPDATE_REFERENCE_TABLE_DATA, payload: data })
const deleteRefTableData = (data) => ({ type: DELETE_REFERENCE_TABLE_DATA, payload: data })

/* Filter Table */
export const setAppendixFilterText = (data) => ({ type: APDX_SET_FILTER_TEXT, payload: data })
export const setRefFilterText = (data) => ({ type: REF_SET_FILTER_TEXT, payload: data })
export const setFrameFilterText = (data) => ({ type: FRAME_SET_FILTER_TEXT, payload: data })

// const referencetablesIsLoading = (id, data) => ({ type: REFERENCE_TABLE_IS_LOADING }, payload:{ id: id, isLoading: data })

const cookies = new Cookies()

//endregion

//region Middleware

/* Login functions */
export function doMyLogin(data) {
	return async dispatch => {
		eplanDoingLogin()
		var res = await backendLogin(data)
		switch (res.status) {
			case 404:
				console.log('404', res.problem)
				cookies.remove('ODEUMAuthToken')
				api.deleteHeader('ODEUMAuthToken')
				dispatch(eplanLoginFail('Error - login failed...'))
				break
			case 200:
				api.setHeader('ODEUMAuthToken', res.data.sessionID)
				cookies.set('ODEUMAuthToken', res.data.sessionID, { path: '/' })
				res.data.loginState = 'valid'
				dispatch(eplanLogin(res.data))
				break
			default:
				console.log(res)
				break
		}
	}
}
export function doCookieLogin() {
	return async dispatch => {
		eplanDoingLogin()
		let token = cookies.get('ODEUMAuthToken')
		if (token !== undefined) {
			var res = await getAuth(token)
			switch (res.status) {
				case 404:
					console.log('404', res.problem)
					cookies.remove('ODEUMAuthToken')
					api.deleteHeader('ODEUMAuthToken')
					dispatch(eplanLoginFail('Error - login failed...'))
					break
				case 200:
					api.setHeader('ODEUMAuthToken', res.data.sessionID)
					cookies.set('ODEUMAuthToken', res.data.sessionID, { path: '/' })
					res.data.loginState = 'valid'
					dispatch(eplanLogin(res.data))
					break
				default:
					console.log(res)
					break
			}
		} else {
			dispatch(eplanLoginFail(''))
		}
	}
}


export function removeOpenApdx(id) {
	return dispatch => {
		//TODO: Remove from server also
		dispatch(removeApdx(id))
	}
}

export function updateAppendix(appendix, id, commit) {
	return async dispatch => {
		dispatch(appendixIsSaving())
		dispatch(await updateApd({ appendix, id, commit }))
	}
}

export function addAppendixAsync(appendix) {
	return async dispatch => {
		dispatch(appendixIsSaving())
		await addAppendix(appendix).then((result) => {
			dispatch(addApd({ result }))
			dispatch(push('/eplan/list/' + result.appendixId + '/edit'))
		})
	}
}


export function getAppendixAsync(id) {
	return async dispatch => {
		dispatch(appendixIsLoading(id, true))
		var apdx = await getAppendixById(id)
		dispatch(getAppendix(apdx))
		dispatch(appendixIsLoading(id, false))

	}
}

export function getListAsync() {
	return async dispatch => {
		var result = await getAppendixList()
		dispatch(getList(result))
		return result
	}

}

export function addFrame(id) {
	return async dispatch => {
		dispatch(appendixIsLoading(id, true))
		let result = await addNewFrame(id)
		dispatch(getAppendix(result))
		dispatch(appendixIsLoading(id, false))
		return result
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
		var data = await getFrameData(id)
		// console.log('-----data - redux-----')
		// console.log(data)
		dispatch(actionGetFrameData(data))
		return data

	}
}
export function setFrameDataAsync(frameId, fields, openFrame) {
	let newFields = {}
	_.forEach(fields, function (value, key) {
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

export function exportFrameToPlansystemAsync(id) {
	return async dispatch => {
		var test = await exportFrameToPlansystem(id).then((result) => {
			console.log(result)
			dispatch(exportFrame())
			return result
		})
		return test
	}
}

export function getAppendixCfg() {
	return async dispatch => {
		await getAppendixConfig().then((result) => {
			dispatch(getApdCfg(result))
		})

	}
}

export function exportAppendixToPlansystemAsync(id) {
	return async dispatch => {
		var test = await exportAppendixToPlansystem(id).then((result) => {
			// console.log(result)
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
		var data = await getReferenceTableList()
		dispatch(getRefTableList(data))
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
export function deleteReferenceTableData(referenceTableId, referenceTableValueId) {
	return async dispatch => {
		await deleteReferenceTableValue({ referenceTableId, referenceTableValueId }).then(
			(referenceTableResult) => {
				dispatch(deleteRefTableData(referenceTableResult))
			}
		)
	}
}
//endregion

//region Reducer

/* Reducer */

const initState = {
	appendixes: List([]),
	openAppendix: [],
	openFrames: [],
	configFrames: [],
	referenceTables: [],
	referenceTableValues: [],
	isLoading: true,
	framesIsLoading: true,
	referencetablesIsLoading: true,
	referenceTablesEntryIsLoading: true,
	conf: null,
	appendixIsSaving: false,
	ApdxLoading: {},
	appendixFilterText: '',
	referenceTableFilterText: '',
	framesTableFilterText: '',
	authObj: {
		loginState: 'active'
	},
	loginErrorMessage: ''
}

function eplan(state = initState, action) {
	switch (action.type) {
		case EPLAN_LOGIN: {
			return {
				...state,
				authObj: action.payload,
				loginErrorMessage: ''
			}
		}
		case EPLAN_LOGIN_FAIL: {
			return {
				...state,
				authObj: {
					loginState: 'notvalid'
				},
				loginErrorMessage: action.payload
			}
		}
		case EPLAN_DOING_LOGIN: {
			return {
				...state,
				authObj: {
					loginState: 'active'
				},
				loginErrorMessage: ''
			}
		}
		case APDX_SET_FILTER_TEXT: {
			return {
				...state,
				appendixFilterText: action.payload
			}
		}
		case REF_SET_FILTER_TEXT: {
			return {
				...state,
				referenceTableFilterText: action.payload
			}
		}
		case FRAME_SET_FILTER_TEXT: {
			return {
				...state,
				framesTableFilterText: action.payload
			}
		}
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
		case APPENDIX_IS_LOADING: {
			return {
				...state,
				ApdxLoading: {
					...state.ApdxLoading,
					[action.payload.id]: action.payload.isLoading
				}
			}
		}
		case UPDATE_APPENDIX:
			{
				/* 				let orig = state.openAppendix.find((apdx) => (apdx.appendixId === parseInt(action.payload.id, 10)))
								orig.fields.map((field) => {
									return action.payload.appendix.fields.map((afield) => {
										return field.id === afield.id ? field.value = afield.value : field
									})
								})
								postAppendix(orig, action.payload.commit)
								return {
									...state,
									openAppendix: {
										...state.openAppendix,
										[action.payload.id]: orig
									},
									appendixIsSaving: false
								} */
				//INFO: For when the Appendix will be an complete object with no arrays
				let newFields = {}
				_.forEach(action.payload.appendix.fields, function (value, key) {
					newFields[value.id] = value
				})
				let newAppendix = {
					...state.openAppendix[action.payload.id],
					fields: {
						...state.openAppendix[action.payload.id].fields,
						...newFields
					}
				}
				postAppendix(newAppendix, action.payload.commit)
				return {
					...state,
					openAppendix: {
						...state.openAppendix,
						[action.payload.id]: newAppendix
					},
					appendixIsSaving: false
				}
			}
		case ADD_APPENDIX:
			return {
				...state,
				appendixes: state.appendixes.concat(action.payload.result),
				appendixIsSaving: false
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
				return {
					...state,
					openAppendix: {
						...state.openAppendix,
						[action.payload.appendixId]: action.payload
					},
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
			_.forEach(action.payload.fields, function (value, key) {
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
					[action.payload.referenceTable.id]: action.payload.referenceTable
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
		case DELETE_REFERENCE_TABLE_DATA:
			return {
				...state,
				referenceTableValues: {
					...state.referenceTableValues,
					[action.payload.referenceTableId]: {
						...state.referenceTableValues[action.payload.referenceTableId],
						data: Map(state.referenceTableValues[action.payload.referenceTableId].data).delete(action.payload.referenceTableValueId.toString()).toObject()
					}
				}
			}
		default:
			return state
	}
}

//endregion

export default eplan
