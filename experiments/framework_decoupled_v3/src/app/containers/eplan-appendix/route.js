module.exports = {
	path: 'eplan',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./Appendix/route.js'),
				require('./AppendixList/route.js'),
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./index.js').default)
		})
	}
}