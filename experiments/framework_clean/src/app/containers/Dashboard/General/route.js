module.exports = {
	path: 'general',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./generalContainer.js').default)
		})
	}
}