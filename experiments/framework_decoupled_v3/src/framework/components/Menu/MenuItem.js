import React from 'react'
import { MenuItemDiv, MenuIconDiv, MenuLabel, Arrow, MenuLink } from './StyledMenuItem'
import { MdKeyboardArrowRight } from 'react-icons/lib/md'
import Icon from 'framework/assets/Icon'

const MenuItem = ({ name, id, icon, location, active, onLoad, close }) => {
	let _onClick = () =>  onLoad(id)
	return (
		/* 		<MenuPanelDiv
					className={active}
					onClick={(e) => {
						e.preventDefault(); onLoad(id)
					}}>
					<MenuLink to={location}>
						<StyledIconDiv>
							<StyledIcon icon={icon} active={true} size={18} />
						</StyledIconDiv>
						{name}
						<Arrow><MdKeyboardArrowRight /></Arrow>
		
					</MenuLink>
				</MenuPanelDiv> */
		<MenuItemDiv close={close} onClick={_onClick} active={active}>
			<MenuLink to={location}>
				<MenuIconDiv><Icon icon={icon} active={true} size={18} /></MenuIconDiv>
				<MenuLabel close={close}>{name}</MenuLabel>
				<Arrow><MdKeyboardArrowRight /></Arrow>
			</MenuLink>
		</MenuItemDiv >
	)
}

export default MenuItem

