module.exports = {
  path: 'users',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./users.js').default)
    })
  }
}