module.exports={
  path:'/',
  getChildRoutes(location,cb){
      require.ensure([],(require)=>{
          cb(null,[
              require('./containers/Dashboard/route.js'),
              require('./containers/Forms/route.js')
          ])
      })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index.js').default)
    })
  }
}
