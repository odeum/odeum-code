module.exports = {
	path: 'edit',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./ReferenceTableEdit.js').default)
		})
	}
}