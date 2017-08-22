const rootRoute = {
	childRoutes: [{
		path: '/',
		component: require('../Home/Home').default,
		childRoutes: [
			require('app/routes.js')
		],
	},
	{
		path: '*',
		component: require('./NotFound').default
	}]
}
export default rootRoute