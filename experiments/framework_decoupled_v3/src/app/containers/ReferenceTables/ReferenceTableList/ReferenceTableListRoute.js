module.exports = {
	path: 'list',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./ReferenceTableList.js').default)
		})
	}
}