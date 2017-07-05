import React from 'react'
import
{
    MenuPanelDiv,
    MenuLink,
    StyledIcon,
    StyledIconDiv,
    Arrow
}
from '../styles/MenuStyles'
import * as Icons from 'react-icons/lib/md'

const MenuItem = ({name,id, icon, location, active, onLoad}) => {
    return (
        <MenuPanelDiv
            className={active}
            onClick={(e) => {e.preventDefault();onLoad(id)
        }}>
            <MenuLink to={location}>
                <StyledIconDiv>
                    <StyledIcon icon={icon} active={true} size={18}/>
                </StyledIconDiv>
                {name}
                <Arrow><Icons.MdKeyboardArrowRight/></Arrow>

            </MenuLink>
        </MenuPanelDiv>
    )
}

export default MenuItem