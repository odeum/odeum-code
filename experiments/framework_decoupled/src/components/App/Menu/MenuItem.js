import React from 'react'
// import { renderIcons } from '../../../assets/icons'
import * as styled from '../styles/MenuStyle'
import * as Icons from 'react-icons/lib/md'
// import {Link} from 'react-router'
const MenuItem = ({ name, icon, location, active }) => {
   const act = 'active'
    return (
        <styled.MenuPanelDiv className={active}>
           <styled.MenuLink to={location}> 
               <styled.StyledIconDiv>
                <styled.StyledIcon icon={icon} active={act} size={18}/>
                </styled.StyledIconDiv>
                {name}
                <styled.Arrow><Icons.MdKeyboardArrowRight /></styled.Arrow>
            
            </styled.MenuLink>
        </styled.MenuPanelDiv>
    )
}

export default MenuItem