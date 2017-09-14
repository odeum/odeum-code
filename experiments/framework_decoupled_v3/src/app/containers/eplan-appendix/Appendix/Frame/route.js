module.exports = {
	path: 'frames/:frameid',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./Edit/route.js'),
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./index.js').default)
		})
	}

}