module.exports = {
	path: 'list/:id',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./Edit/ReferenceTableEditRoute.js'),
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./ReferenceTableContainer.js').default)
		})
	}

}