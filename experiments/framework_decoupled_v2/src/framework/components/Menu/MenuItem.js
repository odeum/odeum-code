import React from 'react'
import {MenuPanelDiv,MenuLink,MenuIconDiv,MenuIcon,Arrow} from 'framework/components/Styles/MenuStyles'
import {MdKeyboardArrowRight} from 'react-icons/lib/md'

const MenuItem = ({name,icon,location,active,onClick}) => {
    return (
        <MenuPanelDiv className={active} onClick={(e)=>{e.preventDefault();onClick(name)}}>
            <MenuLink to={location}>
                <MenuIconDiv>
                    <MenuIcon icon={icon} active={true} size={18}/>
                </MenuIconDiv>
                {name}
                <Arrow><MdKeyboardArrowRight/></Arrow>
            </MenuLink>
            </MenuPanelDiv>
            
    )
}

export default MenuItem