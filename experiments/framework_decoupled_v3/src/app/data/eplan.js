
import { create } from 'apisauce'
import { List } from 'immutable'

const api = create({
	baseURL: 'http://horsenskp.dev.webhouse.dk/',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	mode: 'no-cors'
})

export async function postAppendix(appendix, commit) {
	appendix = { ...appendix, doCommit: commit } // add commit parameter true|false

	var app = JSON.stringify(appendix)
	var data = await api.post('/rest/eplan/kpt/appendix/' + appendix.appendixId, app)
		.then((response) => {
			// console.log(response.data)
			return response.data
		})
	return data
}

export async function getAppendixConfig() {
	var data = await api.get('/rest/eplan/kpt/appendix/config')
		.then((response) => {
			return response.data
		})
	/*   console.log('-----Config-----')
        console.log(data) */
	return data
}

export async function getAppendixList() {
	var data = await api.get('/rest/eplan/kpt/appendix/list')
		.then((response) => {
			return response.data
		})
	const dataList = List(data)
	return dataList
}

export async function getAppendixById(id) {
	/*    console.log('-----API Instance -----')
    console.log(api) */
	var appendix = await api.get('rest/eplan/kpt/appendix/' + id)
		.then((response) => {
			/*  console.log("-------Data/Eplan/GetAppendixByID------")
            console.log(response) */
			return response.data
		})
	return appendix
}

export async function exportAppendixToPlansystem(id) {
	var result = await api.get('rest/eplan/kpt/appendix/publish/' + id)
		.then((response) => {
			return response.data
		})

	return result
}

export async function getCompleteAppendixPdf(id) {
	var result = await api.get('rest/eplan/kpt/appendix/appendixpdf/' + id)
		.then((response) => {
			return response.data
		})

	return result
}

export async function createCompleteAppendixPdf(id) {
	var result = await api.post('rest/eplan/kpt/appendix/appendixpdf/' + id)
		.then((response) => {
			return response.data
		})

	return result
}

export async function getAppendixFramesList(id) {
	var data = await api.get('/rest/eplan/kpt/frame/list/' + id)
		.then((response) => {
			return response.data
		})
	const dataList = List(data)
	return dataList
}

export async function getReferenceTableList() {
	var data = await api.get('/rest/eplan/kpt/reftable/list')
		.then((response) => {
			return response.data
		})
	return data
}

export async function getReferenceTableEntry(id) {
	var data = await api.get('/rest/eplan/kpt/reftable/listvalues/' + id)
		.then((response) => {
			return response.data
		})
	var a = {}
	a.id = parseInt(id, 10)
	a.data = data
	return a
}

//TODO: Should be moved to framework
export async function getImagesList(folder) {
	var data = await api.get('/rest/core/files/images/' + encodeURIComponent(folder))
		.then((response) => {
			// console.log(response.data)
			return response.data
		})
	const dataList = List(data)
	return dataList
}
