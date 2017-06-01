import React from 'react'
import * as styled from '../styles/MenuStyle'
import * as Icons from 'react-icons/lib/md'
// import {Link} from 'react-router'
const MenuItem = ({ name, icon, location, active, onLoad }) => {
//    const act = ()=>{ return active.includes('active') ? true : false}
    return (
        <styled.MenuPanelDiv className={active} onClick={(e) => {e.preventDefault(); onLoad(name)}}>
           <styled.MenuLink to={location}> 
               <styled.StyledIconDiv>
                <styled.StyledIcon icon={icon} active={true} size={18}/>
                </styled.StyledIconDiv>
                {name}
                <styled.Arrow><Icons.MdKeyboardArrowRight /></styled.Arrow>
            
            </styled.MenuLink>
        </styled.MenuPanelDiv>
    )
}

export default MenuItem