import tabSystemConfig from 'app/config'
import { push } from 'react-router-redux'

/*
	Action Types
*/
const CHANGE_TAB = 'FR/TABS/CHANGE_TAB'
const ADD_TAB = 'FR/TABS/ADD_TAB'
const ADD_INSTANCE = 'FR/TABS/ADD_INSTANCE'
const CHANGE_ID = 'FR/TABS/CHANGE_ID'
const CLOSE_TAB = 'FR/TABS/CLOSE_TAB'
const TAB_ISLOADING = 'FR/TABS/TAB_IS_LOADING'
/*
	Actions
*/
export const addInstance = (instance) => ({
	type: ADD_INSTANCE,
	payload: instance
})
export const addTab = (instanceID, tab) => ({
	type: ADD_TAB,
	payload: {
		instanceID: instanceID,
		tab: tab
	}
})
export function tabClose(instanceID, tab) {
	return dispatch => {
		dispatch(tabCloseAction(instanceID, tab))
		dispatch(push(tab.closeLink))
	}
}
export const tabCloseAction = (instanceID, tab) => ({
	type: CLOSE_TAB,
	payload: {
		instanceID: instanceID,
		tab: tab
	}
})
export const changeInstance = (scene) => ({
	type: CHANGE_ID,
	payload: {
		scene: scene
	}
})
export const tabChange = (instanceID, tab) => ({
	type: CHANGE_TAB,
	payload: {
		instanceID: instanceID,
		tab: tab
	}
})


export const tabIsLoading = (instanceID, tab) => ({
	type: TAB_ISLOADING,
	payload: {
		instanceID: instanceID,
		tab: tab
	}
})

/*
	Reducer
*/
const initState = {
	tabSystem: tabSystemConfig || {
		error: {
			id: 'error',
			label: 'Error',
			tabs: {
				error: {
					label: "Error",
					location: "e404",
					icon: "error",
					fixed: true,
					isLoading: null,
					closeLocation: ''
				}
			}
		}
	},
	activeScene: tabSystemConfig['dashboard'].sceneID
}

export default function tabReducer(state = initState, action) {
	switch (action.type) {
		case ADD_INSTANCE: {
			return {
				...state,
				tabSystem: {
					...state.tabSystem,
					[action.payload.sceneID]: {
						sceneID: action.payload.sceneID,
						location: action.payload.location,
						name: action.payload.name,
						activeTab: action.payload.activeTab,
						isScene: action.payload.isScene,
						tabs: action.payload.tabs
					}
				}
			}
		}
		case CLOSE_TAB: {
			let copy = Object.assign({}, state.tabSystem[action.payload.instanceID].tabs)
			delete copy[action.payload.tab.id]
			return {
				...state,
				tabSystem: {
					...state.tabSystem,
					[action.payload.instanceID]: {
						...state.tabSystem[action.payload.instanceID],
						tabs: copy
					}
				}
			}

		}
		case CHANGE_ID: {
			return {
				...state,
				activeScene: state.tabSystem[action.payload.scene].sceneID
			}
		}
		case CHANGE_TAB: {
			return {
				...state,
				tabSystem: {
					...state.tabSystem,
					[action.payload.instanceID]: {
						...state.tabSystem[action.payload.instanceID],
						activeTab: action.payload.tab

					}
				}
			}
		}
		case ADD_TAB:
			{
				console.log(action.payload)
				return {
					...state,
					tabSystem: {
						...state.tabSystem,
						[action.payload.instanceID]: {
							...state.tabSystem[action.payload.instanceID],
							tabs: {
								...state.tabSystem[action.payload.instanceID].tabs,
								[action.payload.tab.id]: action.payload.tab
							}
						}
					}
				}
			}
		default:
			return state
	}
}

