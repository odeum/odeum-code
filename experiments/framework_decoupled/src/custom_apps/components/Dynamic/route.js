module.exports={ 
path: '/:dynamic/dynamic',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Dynamic.js').default)
    })
  }
}
