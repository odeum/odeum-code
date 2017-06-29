module.exports = {
  path: 'dashboard',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Tabs/General/route.js'),
        require('./Tabs/Fields/route.js'),
        require('./Tabs/Workflow/route.js'),
        require('./Tabs/Users/route.js'),
        require('./Tabs/Operations/route.js'),
        require('./Tabs/Configuration/route.js'),
        require('./Tabs/Design/route.js')
      ])
    })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Dashboard.js').default)
    })
  }
}