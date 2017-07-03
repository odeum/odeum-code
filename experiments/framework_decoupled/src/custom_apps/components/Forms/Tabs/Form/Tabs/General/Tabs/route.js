module.exports={
    path:'something',
    getComponent(location,cb){
        require.ensure([],(require)=>{
            cb(null, require('./someComponent.js').default)
        })
    }
}