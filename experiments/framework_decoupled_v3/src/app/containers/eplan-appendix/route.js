module.exports= {
path: 'eplan',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Tabs/Appendix/route.js'),
        require('./Tabs/AppendixList/route.js'),
      ])
    })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index.js').default)
    })
  }
}