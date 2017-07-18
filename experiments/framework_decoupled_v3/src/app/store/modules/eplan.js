import {getAppendixList,getAppendixById,getAppendixConfig} from 'app/data/eplan'
import {List} from 'immutable'

/* Action Types */

export const GET_APPENDIX_LIST = '@@EPLAN/GET_EPLAN_LIST'
export const GET_APPENDIX = '@@EPLAN/GET_APPENDIX'
export const GET_APPENDIX_CONFIG = '@@EPLAN/GET_APPENDIX_CONFIG'
/* Actions */

export const getList = (data) => ( {type: GET_APPENDIX_LIST ,payload:data})
export const getAppendix = (data) => ( {type:GET_APPENDIX,payload:data})
export const getApdCfg = (data) => ({type:GET_APPENDIX_CONFIG,payload:data})
/* Middleware */
export function getAppendixAsync(id){
    return async dispatch=>{
        var appendix =await getAppendixById(id)
        console.log('MiddleWare', appendix)
        dispatch(getAppendix(appendix))
    }
}
export function getListAsync(){
    return async dispatch=>{
     var data = await getAppendixList()
     console.log('getListAsync',data)
     dispatch(getList(data))
    }
}
export function getAppendixCfg(){
    return async dispatch=>{
        var config = await getAppendixConfig()
        dispatch(getApdCfg(config))
    }
}
/* Reducer */
const initState = {
    appendixes: List([]),
    openAppendix:[],
    isLoading:true,
    config:null
}

function eplan(state = initState, action) {
    switch (action.type) {
     case GET_APPENDIX_CONFIG:
     {
         return {
             ...state,
             config:action.payload
         }
     }
        case GET_APPENDIX_LIST:
        return {
            ...state,
            appendixes:action.payload,
            isLoading:false
    }
        case GET_APPENDIX:
        return{
            ...state,
            openAppendix: state.openAppendix.concat(action.payload)
        }
        default:
            return state
    }
}

export default eplan
