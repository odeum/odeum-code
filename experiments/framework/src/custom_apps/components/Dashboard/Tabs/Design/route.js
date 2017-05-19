module.exports = {
  path: 'design',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./design.js').default)
    })
  }
}