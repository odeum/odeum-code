module.exports = {
  path: 'workflow',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./workflow.js').default)
    })
  }
}