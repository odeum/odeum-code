import React from 'react'
//Assets logo image
import logo from 'framework/assets/eplan_logo.png'
//Styled components
import { LogoLink, LogoDiv, LogoImg } from '../styles/HeaderStyles'

const Logo = () => {
	return (
		<LogoDiv>
			<LogoLink to="/dashboard/general">
				<LogoImg src={logo} alt="Logo"/>
			</LogoLink>
		</LogoDiv>
	)
}

export default Logo