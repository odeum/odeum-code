//REMOVE as it is just a test div

import React from 'react';
import DrawerItem from './DrawerItem'
import * as s from '../styled/DrawerStyle'
const DrawerWrapper = ({ScenesDrawer}) => {
    console.log(ScenesDrawer)
    return (
        <s.DrawerWrapperDiv>
            {ScenesDrawer.map((scene,index)=>(<DrawerItem name={scene.name} location={scene.location} onPush={scene.onPush} key={index}/>))}
        </s.DrawerWrapperDiv>
    )
}

export default DrawerWrapper