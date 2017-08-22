/* Action Types */
const CHANGE_TYPE = "@@CAKE/CHANGE_TYPE"
/*Actions*/
const changeCakeType = (data) => ({ type: CHANGE_TYPE, payload: data })
/*Middleware*/
export function changeCake(text) {
	return dispatch => {
		dispatch(changeCakeType(text))
	}
}
/*Reducer*/

const initState	= {
	type: 'chocolate'
}

function cake( state = initState, action) {
 	switch (action.type)
	 {
		case CHANGE_TYPE:
		{return { ...state,
			type: action.payload }
		}

		default:
			return state
	}
}
export default cake