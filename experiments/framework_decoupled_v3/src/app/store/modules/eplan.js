
import {getAppendixList,getAppendixById,getAppendixConfig, postAppendix,publishAppendixToPlansystem} from 'app/data/eplan'
import {List} from 'immutable'


/* Action Types */

export const GET_APPENDIX_LIST = '@@EPLAN/GET_EPLAN_LIST'
export const GET_APPENDIX = '@@EPLAN/GET_APPENDIX'
export const GET_APPENDIX_CONFIG = '@@EPLAN/GET_APPENDIX_CONFIG'
export const UPDATE_APPENDIX = '@@EPLAN/UPDATE_APPENDIX'
const CLOSE_APPENDIX = '@@EPLAN/CLOSE_OPEN_APPENDIX'
export const PUBLISH_APPENDIX_PLANSYSTEM = '@@EPLAN/PUBLISH_APPENDIX_PLANSYSTEM'

/* Actions */
export const getList = (data) => ( {type: GET_APPENDIX_LIST ,payload:data})
export const getAppendix = (data) => ( {type:GET_APPENDIX,payload:data})
export const getApdCfg = (data) => ({type:GET_APPENDIX_CONFIG,payload:data})
export const updateApd = (data) =>({type:UPDATE_APPENDIX,payload:data})
const removeApdx = (data)=>({type:CLOSE_APPENDIX,payload:data})
export const publishAppendix = () => ({type:PUBLISH_APPENDIX_PLANSYSTEM})

/* Middleware */
export function removeOpenApdx(id){
    return dispatch=>{
        dispatch(removeApdx(id))
    }
}
export function updateAppendix(appendix,id){
    return dispatch=>{
       dispatch(updateApd({appendix,id}))
       
    }
}

export function getAppendixAsync(id){
    return async dispatch=>{
        await getAppendixById(id).then((result)=>{
            console.log('-----Modules/Appendix Async-----')
            dispatch(getAppendix(result))
        })
      
    }
}
export function getListAsync(){
    return async dispatch=>{
        await getAppendixList().then(
         (result)=>{
            dispatch(getList(result))
         }
     )
   
    }
}
export function getAppendixCfg(){
    return async dispatch=>{
        await getAppendixConfig().then((result)=>{
            dispatch(getApdCfg(result))
        })
       
    }
}
export function publishAppendixToPlansystemAsync(id) {
    return async dispatch => {
        await publishAppendixToPlansystem(id)
        dispatch(publishAppendix())
    }
}

/* Reducer */
const initState = {
    appendixes: List([]),
    openAppendix:[],
    isLoading:true,
    conf:null
}

function eplan(state = initState, action) {
    switch (action.type) {
        case CLOSE_APPENDIX:{
            return {
                ...state,
                openAppendix: state.openAppendix.filter((item)=>item===action.payload)
            }
        }
     case UPDATE_APPENDIX:
     {  console.log('-----action.payload-----')
        console.log(action.payload)
        var orig = state.openAppendix.find((apdx)=>(apdx.appendixId===parseInt(action.payload.id,10)))
        console.log('-----orig-----')
        console.log(orig)
        // console.log(orig.fields)
        orig.fields.map((field)=>{
            return action.payload.appendix.fields.map((afield)=>{
                return field.id===afield.id? field.value=afield.value : field
            })
        })
        postAppendix(orig)
        return state
     }
     case GET_APPENDIX_CONFIG:
     {
         return {
             ...state,
             conf:action.payload
         }
     }
        case GET_APPENDIX_LIST:
        return {
            ...state,
            appendixes:action.payload,
            isLoading:false
    }
        case GET_APPENDIX:
        {
        return{
            ...state,
            openAppendix: state.openAppendix.concat(action.payload)
        }}
        default:
            return state
    }
}

export default eplan
