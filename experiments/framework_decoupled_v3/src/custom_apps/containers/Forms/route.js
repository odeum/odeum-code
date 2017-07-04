module.exports={
  path: 'forms',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index.js').default)
    })
  }
}
