import React from 'react'
import { MenuItemDiv, MenuIconDiv, MenuLabel, Arrow, MenuLink, MenuItemCont } from './StyledMenuItem'
import { MdKeyboardArrowRight } from 'react-icons/lib/md'
import Icon from 'framework/assets/Icon'

//TODO remove close
const MenuItem = ({ name, id, icon, location, active, onLoad, close }) => {
	let _onClick = () => onLoad(id)
	return (
		<MenuItemDiv close={close} onClick={_onClick} active={active}>
			<MenuLink to={location}>
				<MenuItemCont close={close}>
					<MenuIconDiv close={close}><Icon icon={icon} active={true} size={18} /></MenuIconDiv>
					<MenuLabel close={close}>{name}</MenuLabel>
					<Arrow close={close}><MdKeyboardArrowRight /></Arrow>
				</MenuItemCont>
			</MenuLink>
		</MenuItemDiv >
	)
}

export default MenuItem

