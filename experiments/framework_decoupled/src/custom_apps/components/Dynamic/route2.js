module.exports={
    path:'/:dynamic/dynamic2',
    getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Dynamic2.js').default)
    })
  }
}