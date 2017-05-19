module.exports = {
  path: 'fields',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./fields.js').default)
    })
  }
}