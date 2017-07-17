
import {create} from 'apisauce'
import {List} from 'immutable'

const api = create({
    baseURL:'http://horsenskp.dev.webhouse.dk/',
    timeout:10000,
    headers:{'Content-Type': 'application/json',
                'Accept': 'application/json' }
})

export async function getAppendixConfig(){
    var data=await api.get('/rest/eplan/kpt/appendix/config')
    .then((response)=>{
      return response.data
    })
    return data
}

export async function getAppendixList()
{  var data = await api.get('/rest/eplan/kpt/appendix/list')
    .then((response)=>{
    console.log(response)
    return response.data
})
    const dataList = List(data)
    return dataList
}
export async function getAppendixById(id)
{
    var appendix =await api.get('rest/eplan/kpt/appendix/'+id)
    .then((response)=>{
        console.log(response)
       return response.data
    })
    return appendix
}
/* 
import axios from 'axios'
var axiosInstance= axios.create({
    baseURL:'http://horsenskp.dev.webhouse.dk/',
    timeout:10000,
    headers:{'Content-Type': 'application/json',
                'Accept': 'application/json' }
})
export async function getAppendixConfig(){
    var data=[]
    await axiosInstance.get('/rest/eplan/kpt/appendix/config')
    .then(function(response){
        data = data.concat(response.data)
    })
    return data
} 
export async function getAppendixList()
{  var data = []
   await axiosInstance.get('/rest/eplan/kpt/appendix/list')
    .then(function(response){
    data = data.concat(response.data)
})
    const dataList = List(data)
    return dataList
}
export async function getAppendixById(id)
{
    var appendix =[]
    await axiosInstance.get('rest/eplan/kpt/appendix/'+id)
    .then(function(response){
        console.log(response)
        appendix = appendix.concat(response.data)
    })
    return appendix
}
*/