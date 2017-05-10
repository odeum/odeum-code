import React from 'react'
import { renderIcons } from '../../Tabs/styled/icons'
import * as s from '../styles/MenuStyle'
import * as Icons from 'react-icons/lib/md'
const MenuItem = ({ name, icon, location, onPush }) => {
    let active = 'active'
    return (
        <s.MenuPanelDiv>
            <div className="MdKeyboardArrowRight" onClick={e => {e.preventDefault(); onPush(location)}}>
                <s.Icon>{renderIcons(icon, active)}</s.Icon>
                {name}
                <s.Arrow><Icons.MdKeyboardArrowRight /></s.Arrow>
            </div>
        </s.MenuPanelDiv>
    )
}

export default MenuItem