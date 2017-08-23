module.exports = {
	path: '/',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./containers/Dashboard/route.js'),
				require('./containers/Forms/route.js'),
				require('./containers/eplan-appendix/route.js'),
				require('./containers/ReferenceTables/ReferenceTablesRoute.js')
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./index.js').default)
		})
	}
}
