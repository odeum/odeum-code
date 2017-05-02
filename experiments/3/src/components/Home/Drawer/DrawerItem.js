import React from 'react'
import * as s from '../styled/DrawerStyle'
const DrawerItem = ({ name, location, onPush }) => {
    return (
        <s.DrawerBlueBar>
                <s.DrawerItemLink href='#' 
                onClick={e => {e.preventDefault()
                                 onPush(location)}}>
                    {name}
                </s.DrawerItemLink>          
        </s.DrawerBlueBar>
    )
}

export default DrawerItem