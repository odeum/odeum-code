module.exports = {
  path: 'actions',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./operations.js').default)
    })
  }
}