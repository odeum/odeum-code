import {getAppendixList,getAppendixById} from 'app/data/eplan'
import {List} from 'immutable'

/* Action Types */

export const GET_APPENDIX_LIST = '@@EPLAN/GET_EPLAN_LIST'
export const GET_APPENDIX = '@@EPLAN/GET_APPENDIX'
/* Actions */

export const getList = (data) => ( {type: GET_APPENDIX_LIST ,payload:data})
export const getAppendix = (data) => ( {type:GET_APPENDIX,payload:data})

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
/* Reducer */
const initState = {
    data: List([]),
    openAppendix:[],
    isLoading:true
}

function eplan(state = initState, action) {
    switch (action.type) {
        case GET_APPENDIX_LIST:
        return {
            ...state,
            data:action.payload,
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
