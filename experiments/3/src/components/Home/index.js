import React from 'react'

const Home = (scene) => {
  console.log('Home')
   console.log(scene)
    return (
        <div>
           
            <scene.comp tab={scene.tab} changeTab={scene.changeTab}/>
            
        </div>
    )
}

export default Home