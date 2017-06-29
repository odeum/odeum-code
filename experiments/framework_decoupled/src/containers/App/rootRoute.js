const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('../Home/Home').default,
        childRoutes: [
            require('../../custom_apps/routes.js')
        ],
    },
        {
            path: '*',
            component: require('./NotFound').default
        }]
}
export default rootRoute