module.exports = {
  path: '/forms',
  getChildRoutes(location,cb){
    require.ensure([],(require)=>{
      cb(null,[
        require('./Tabs/SimpleForm/route.js')
      ])
    })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Forms.js').default)
    })
  }
}