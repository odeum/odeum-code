module.exports = {
	path: 'frames/:frameid/edit',
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./index.js').default)
		})
	}
}