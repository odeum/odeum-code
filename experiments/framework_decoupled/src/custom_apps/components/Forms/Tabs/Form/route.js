module.exports = {
  path: ':id',
   getChildRoutes(location, cb) {
      require.ensure([], (require) => {
          cb(null, [
              require('./Tabs/General/route.js'),
              require('./Tabs/Configuration/route.js')
          ])
      })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Form.js').default)
    })
  }
}