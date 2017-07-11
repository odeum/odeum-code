import axios from 'axios'
import {List} from 'immutable'
var axiosInstance= axios.create({
    baseURL:'http://horsenskp.dev.webhouse.dk/',
    timeout:1000,
    headers:{'Content-Type': 'application/json',
                'Accept': 'application/json' }
})

export async function getAppendixList()
{  var data = []
   await axiosInstance.get('/rest/eplan/kpt/appendix/list')
    .then(function(response){
    data = data.concat(response.data)
})
    const dataList = List(data)
    return dataList
}