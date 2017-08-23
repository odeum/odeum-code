import { getUsers } from 'app/data/cake'
/* Action Types */
const CHANGE_TYPE = "@@CAKE/CHANGE_TYPE"
const GET_USERS = "@@CAKE/GET_USERS"
/*Actions*/
const changeCakeType = (data) => ({ type: CHANGE_TYPE, payload: data })
const setUsers = (data) => ({ type: GET_USERS, payload: data })
/*Middleware*/

export async function getUsersAsync() {
	return async dispatch => {
		//First we get the users
		var users = await getUsers()
		//After we receive them, we insert them into the store
		dispatch(setUsers(users))
	}
}
export function changeCake(text) {
	return dispatch => {
		dispatch(changeCakeType(text))
	}
}
/*Reducer*/

const initState	= {
	type: 'chocolate',
	users: []
}

function cake( state = initState, action) {
 	switch (action.type)
	 {
		case CHANGE_TYPE:
		{return { ...state,
			type: action.payload }
		}
		case GET_USERS:
		{
			return { ...state,
				users: action.payload }
		}
		default:
			return state
	}
}
export default cake