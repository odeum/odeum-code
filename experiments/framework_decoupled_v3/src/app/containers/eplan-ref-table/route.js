module.exports = {
	path: 'reference',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./ReferenceTableList/route.js'),
				require('./ReferenceTable/route.js'),
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./index.js').default)
		})
	}
}