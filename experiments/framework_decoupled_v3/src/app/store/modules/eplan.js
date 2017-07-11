import {getAppendixList} from 'app/data/eplan'
import {List} from 'immutable'

/* Action Types */

export const GET_APPENDIX_LIST = '@@EPLAN/GET_APP_LIST'

/* Actions */

export const getList = (data) => ( {type: GET_APPENDIX_LIST ,payload:data})

/* Middleware */
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
        default:
            return state
    }
}

export default eplan
