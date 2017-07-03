module.exports = {
  path: 'general',
  getChildRoutes(location,cb){
    require.ensure([],(require)=>{
      cb(null,[
        require('./Tabs/route.js')
      ])
    })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./general.js').default)
    })
  }
}