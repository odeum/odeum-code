module.exports= {
path: 'dashboard',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Tabs/route.js'),
      ])
    })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index.js').default)
    })
  }
}