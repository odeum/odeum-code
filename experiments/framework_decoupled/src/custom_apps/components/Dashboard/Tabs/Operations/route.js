module.exports = {
  path: 'operations',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./operations.js').default)
    })
  }
}