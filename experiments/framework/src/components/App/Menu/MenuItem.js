import React from 'react'
import { renderIcons } from '../../../assets/icons'
import * as styled from '../styles/MenuStyle'
import * as Icons from 'react-icons/lib/md'
// import {Link} from 'react-router'
const MenuItem = ({ name, icon, location, active }) => {
    //let active = 'active'
    return (
        <styled.MenuPanelDiv className={active}>
           <styled.MenuLink to={location}> <div>
                <styled.Icon>{renderIcons(icon, active)}</styled.Icon>
                {name}
                <styled.Arrow><Icons.MdKeyboardArrowRight /></styled.Arrow>
            </div>
            </styled.MenuLink>
        </styled.MenuPanelDiv>
    )
}

export default MenuItem