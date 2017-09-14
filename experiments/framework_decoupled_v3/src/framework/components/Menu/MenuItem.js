import React from 'react'
import {
	MenuPanelDiv,
	MenuLink,
	StyledIcon,
	StyledIconDiv,
	Arrow
}
	from '../styles/MenuStyles'
//Refactor get rid of library
import { MdKeyboardArrowRight } from 'react-icons/lib/md'

const MenuItem = ({ name, id, icon, location, active, onLoad }) => {
	return (
		<MenuPanelDiv
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
		</MenuPanelDiv>
	)
}

export default MenuItem