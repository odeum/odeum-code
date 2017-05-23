module.exports={
  path:'/',
  getChildRoutes(location,cb){
      require.ensure([],(require)=>{
          cb(null,[
              require('./components/Dashboard/route.js'),
              require('./components/Forms/route.js'),
              require('./components/Dynamic/route.js'),
              require('./components/Dynamic/route2.js')
          ])
      })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/index.js').default)
    })
  }
}
