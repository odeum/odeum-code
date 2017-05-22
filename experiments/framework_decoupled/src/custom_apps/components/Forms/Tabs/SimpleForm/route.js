module.exports = {
  path: 'simple',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./SimpleFormContainer.js').default)
    })
  }
}