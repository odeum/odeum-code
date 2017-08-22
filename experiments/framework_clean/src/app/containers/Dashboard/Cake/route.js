module.exports = {
	path: 'cake',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./cakeContainer.js').default)
		})
	}
}