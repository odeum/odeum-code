module.exports = {
	path: 'reference',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./ReferenceTableList/ReferenceTableListRoute.js'),
				require('./ReferenceTable/ReferenceTableContainerRoute.js'),
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./EplanReferenceTable.js').default)
		})
	}
}