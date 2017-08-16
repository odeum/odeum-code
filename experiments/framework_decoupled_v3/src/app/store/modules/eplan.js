
import { getAppendixList, getAppendixById, getAppendixConfig, postAppendix, exportAppendixToPlansystem } from 'app/data/eplan' //getAppendixFramesList
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

/* Middleware */
export function removeOpenApdx(id) {
	return dispatch => {
		dispatch(removeApdx(id))
	}
}

export function updateAppendix(appendix, id) {
	return dispatch => {
		dispatch(updateApd({ appendix, id }))

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
/* Reducer */
const initState = {
	appendixes: List([]),
	openAppendix: [],
	isLoading: true,
	framesIsLoading: true,
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
			var orig = state.openAppendix.find((apdx) => (apdx.appendixId === parseInt(action.payload.id, 10)))
			orig.fields.map((field) => {
				return action.payload.appendix.fields.map((afield) => {
					return field.id === afield.id ? field.value = afield.value : field
				})
			})
			postAppendix(orig)
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
			console.log(action.payload)
			return {
				...state,
				appendixes: action.payload,
				framesIsLoading: false
			}

		default:
			return state
	}
}

export default eplan
