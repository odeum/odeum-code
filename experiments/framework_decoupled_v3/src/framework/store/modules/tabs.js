import config from 'app/config.json'
import { push } from 'react-router-redux'

/*Action Types*/
export const CHANGE_TAB = "@@TABS/CHANGE_TAB"
export const SET_SUBTABS = "@@TABS/SET_TABS"
export const ADD_TAB = "@@TABS/ADD_TAB"
export const ADD_INSTANCE = "@@TABS/ADD_INSTANCE"
export const CHANGE_ID = "@@TABS/CHANGE_ID"
export const CLOSE_TAB = "@@TABS/CLOSE_TAB"
var _ = require('lodash')

/*Actions*/
export const addInstance = (instanceID) => ({
	type: ADD_INSTANCE,
	payload: instanceID
})

export const addTab = (instanceID, tab) => ({
	type: ADD_TAB,
	payload: {
		instanceID: instanceID,
		tab: tab
	}
})

export const tabClose = (instanceID, tab) => {
	return {
		type: CLOSE_TAB,
		payload: {
			instanceID: instanceID,
			tab: tab
		}
	}
}

export const changeId = (scene) => ({
	type: CHANGE_ID,
	payload: {
		scene: scene
	}
})

export const tabChange = (instanceID, label) => {
	if (label)
		return {
			type: CHANGE_TAB,
			payload: {
				instanceID: instanceID,
				label: label
			}
		}
	else return {
		type: CHANGE_TAB,
		payload: {
			instanceID: instanceID,
			label: ''
		}
	}
}

export const setTabs = (instanceID, tabs) => ({
	type: SET_SUBTABS,
	payload: {
		instanceID: instanceID,
		tabs: tabs
	}
})

// var tabss = config.tabs
/*Reducer*/
const initialState = {
	scenes: config.scenes,
	activeScene: config.scenes[0].sceneID,
	tabInstance: config.tabs || [
		{
			instanceID: 0,
			tabs: [{
				label: 'Error',
				location: 'e404',
				icon: 'error',
				isFixed: false
			}],
			activeTab: 'Error'
		}]
}

function findInstanceByID(instanceID, tabInstance) {
	return _.find(tabInstance, (tabInstance) => (tabInstance.instanceID === instanceID))

}

export default function tabs(state = initialState, action) {
	console.log('-----action-----')
	console.log(action)
	switch (action.type) {
		case ADD_INSTANCE: {
			let findInstance = findInstanceByID(action.payload, state.tabInstance)
			if (findInstance !== undefined)
				return state
			else {
				var emptyInstance = {
					instanceID: action.payload,
					tabs: [],
					activeTab: ''
				}

				return {
					...state,
					tabInstance: _.concat(state.tabInstance, emptyInstance)
				}
			}
		}
		case CLOSE_TAB: {
			let findInstance = findInstanceByID(action.payload.instanceID, state.tabInstance)
			findInstance.tabs = findInstance.tabs.filter((tab) => tab !== action.payload.tab)
			findInstance.activeTab = findInstance.tabs[0].label
			//REFACTOR
			action.asyncDispatch(push(action.payload.tab.closeLink))

			return {
				...state,
				tabInstance: state.tabInstance.map((instance) => instance.instanceID === findInstance.instanceID ? instance = findInstance : instance),

			}
		}
		case CHANGE_ID: {
			return {
				...state,
				activeScene: action.payload.scene
			}
		}
		case CHANGE_TAB: {

			let findInstance = findInstanceByID(action.payload.instanceID, state.tabInstance)

			if (action.payload.label === '') {
				findInstance.activeTab = findInstance.tabs[0].label

			} else {

				findInstance.activeTab = action.payload.label
			}
			let newInstances = _(state.tabInstance).keyBy('instanceID').set(findInstance.instanceID, findInstance).values().value()

			return {
				...state,
				tabInstance: newInstances
			}
		}
		case ADD_TAB: {
			let findInstance = findInstanceByID(action.payload.instanceID, state.tabInstance)
			let findDuplicate = _.find(findInstance.tabs, action.payload.tab)
			if (findDuplicate === undefined) {
				findInstance.tabs.push(action.payload.tab)
				let newInstances = _(state.tabInstance).keyBy('instanceID').set(findInstance.instanceID, findInstance).values().value()
				return {
					...state,
					tabInstance: newInstances
				}
			}
			else return state
		}
		default:
			return state
	}
}
