import React from 'react'
import logo from 'assets/codejs_logo.png'
import { HeaderLogoDiv, LogoLink} from 'framework/components/Styles/HeaderStyles'
const Logo = () => {
    return (
        <HeaderLogoDiv>
            <LogoLink to='/dashboard/general'>
                <img src={logo} alt="Logo" />
            </LogoLink>
        </HeaderLogoDiv>
    )
}

export default Logo