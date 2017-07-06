module.exports= {
path: 'list/:id',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index.js').default)
    })
  }
}