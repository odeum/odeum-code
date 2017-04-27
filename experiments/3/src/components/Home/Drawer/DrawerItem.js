import React from 'react'
import * as s from '../styled/DrawerStyle'
const DrawerItem = ({ name, location, onPush }) => {
    //  console.log(name)
    // console.log(location)
    //  console.log(onPush)

    return (
        <s.DrawerBlueBar>
            <div>
                <s.DrawerItemLink href='#' 
                onClick={e => {e.preventDefault()
                                 onPush(location)}}>
                    {name}
                </s.DrawerItemLink>
            </div>
        </s.DrawerBlueBar>
    )
}

export default DrawerItem