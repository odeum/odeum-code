module.exports = {
  path: 'dynamictabopener',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./dynamicTabOpener.js').default)
    })
  }
}