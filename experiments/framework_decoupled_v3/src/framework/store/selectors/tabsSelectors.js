import { createSelector } from 'reselect'
var _ = require('lodash')

export const getInstance = (state, props) =>
{ 
	var instance = _.find(state.tabs.tabInstance, function (instance) {
		return instance.instanceID === props.instanceID ? instance : null
	})
	return instance
}

export const getTabs = (state, props) => {
	var instance = _.find(state.tabs.tabInstance, function (instance) {
		return instance.instanceID === props.instanceID ? instance : null
	})
	return instance.tabs
}
export const makeGetTabInstance = () => {
	return createSelector(
		[getInstance],
		(tabInstance) => {
			return tabInstance
		}
	)
}

