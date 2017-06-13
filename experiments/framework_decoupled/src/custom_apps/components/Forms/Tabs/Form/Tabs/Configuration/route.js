module.exports = {
  path: 'configuration',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./configuration.js').default)
    })
  }
}