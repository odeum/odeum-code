import React from 'react'
import { renderIcons } from '../../../assets/icons'
import * as s from '../styles/MenuStyle'
import * as Icons from 'react-icons/lib/md'
// import {Link} from 'react-router'
const MenuItem = ({ name, icon, location, active }) => {
    //let active = 'active'
    return (
        <s.MenuPanelDiv className={active}>
           <s.MenuLink to={location}> <div>
                <s.Icon>{renderIcons(icon, active)}</s.Icon>
                {name}
                <s.Arrow><Icons.MdKeyboardArrowRight /></s.Arrow>
            </div>
            </s.MenuLink>
        </s.MenuPanelDiv>
    )
}

export default MenuItem