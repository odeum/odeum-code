export const getMenuItems = (state, props) => {
	var MenuItems = {}
	for (var instance in state.tabReducer.tabSystem) {
		if (state.tabReducer.tabSystem[instance].isScene === true)
			MenuItems[instance] = state.tabReducer.tabSystem[instance]
	}
	return MenuItems
}   