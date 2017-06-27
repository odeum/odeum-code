import React from 'react'
import {MenuDiv} from 'framework/components/Styles/MenuStyles'
import MenuItem from 'framework/components/Menu/MenuItem'

const Menu = ({scenes,loadTabs}) => {
    return (
        <div>
        <MenuDiv>
            {scenes.map((scene,index)=>
            <MenuItem
                name={scene.name}
                icon={scene.icon}
                location={scene.location} 
                active={true}
                onClick={loadTabs}
                key={index} 
            />)}
        </MenuDiv>
    </div>
    )
}

export default Menu