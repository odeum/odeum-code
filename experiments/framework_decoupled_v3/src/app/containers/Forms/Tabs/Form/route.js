module.exports = {
	path: 'list/form',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./formContainer.js').default)
		})
	}
}