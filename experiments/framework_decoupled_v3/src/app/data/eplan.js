
import { create } from 'apisauce'
import { List } from 'immutable'

 const api = create({
    baseURL: 'http://horsenskp.dev.webhouse.dk/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    mode:'no-cors'
})

export async function postAppendix(appendix){
    var app = JSON.stringify(appendix)
    var data = await api.post('/rest/eplan/kpt/appendix/'+appendix.appendixId,app)
        .then((response)=>console.log(response))
    return data
}
export async function getAppendixConfig() {
    var data = await api.get('/rest/eplan/kpt/appendix/config')
        .then((response) => {
            return response.data
        })
        console.log('-----Config-----')
        console.log(data)
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
    console.log('-----API Instance -----')
    console.log(api)
    var appendix = await api.get('rest/eplan/kpt/appendix/' + id)
        .then((response) => {
            console.log("-------Data/Eplan/GetAppendixByID------")
            console.log(response)
            return response.data
        })
    return appendix
}

export async function publishAppendixToPlansystem(id) {
    var result = await api.get('rest/eplan/kpt/appendix/publish/' + id)
        .then((response) => {
            return response.data
        })

    return result
}