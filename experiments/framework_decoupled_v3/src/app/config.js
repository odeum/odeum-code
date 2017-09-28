var tabSystem = {
	/* dashboard: {
		sceneID: 'dashboard',
		icon: 'dashboard',
		name: 'Dashboard',
		location: '/dashboard/general',
		activeTab: 'General',
		isScene: true,
		tabs: {
			general: {
				id: 'general',
				label: 'General',
				location: '/dashboard/general',
				icon: 'assignment_turned_in',
				fixed: true,
				isLoading: null,
				closeLink: ''
			}
		}
	}, */
	eplan: {
		sceneID: 'eplan',
		location: '/eplan/list',
		name: 'Kommuneplantillæg',
		icon: 'assignment',
		activeTab: 'Overvsigt',
		isScene: true,
		tabs: {
			eplan_oversigt: {
				id: 'eplan_oversigt',
				label: "Oversigt",
				location: "/eplan/list",
				icon: "assignment",
				fixed: true,
				isLoading: false,
				closeLink: ''
			}
		}
	},
	ref_table: {
		sceneID: 'ref_table',
		name: "Reference tabeller",
		location: '/reference/list',
		activeTab: 'Oversigt',
		icon: 'grid_on',
		isScene: true,
		tabs: {
			ref_oversigt: {
				id: 'ref_oversigt',
				label: 'Oversigt',
				location: '/reference/list',
				icon: 'grid_on',
				fixed: true,
				isLoading: true,
				closeLink: ''
			}
		}
	},
/* 	settings: {
		sceneID: 'settings',
		name: 'Indstillinger', 
		location: '/settings',
		activeTab: 'Settings',
		icon: 'settings',
		isScene: true,
		tabs: {
			settings: {
				id: 'settings',
				label: 'Settings',
				location: '/settings',
				icon: 'settings',
				fixed: true,
				isLoading: false,
				closeLink: ''
			}
		}
	}, */
/* 	general: {
		sceneID: 'general',
		location: '/dashboard/general/subtab/100',
		activeTab: 'SubTab',
		isScene: false,
		tabs: {
			subtab: {
				id: 'overview',
				label: "Overview",
				location: "/dashboard/general/subtab/100",
				icon: "info",
				fixed: true,
				isLoading: true,
				closeLink: '/dashboard/general'
			}
		}
	} */
}
export default tabSystem