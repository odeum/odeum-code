import React from 'react'
//Assets logo image
// import logo from 'framework/assets/eplan_logo.png'
import logo from 'framework/assets/odeum_eplan_logo.svg'

//Styled components
import { LogoLink, LogoDiv, LogoImg } from '../styles/HeaderStyles'

const Logo = () => {
	return (
		<LogoDiv>
			<LogoLink to="/">
				<LogoImg src={logo} size={'31px'} alt="Logo"/>
			</LogoLink>
		</LogoDiv>
	)
}

export default Logo