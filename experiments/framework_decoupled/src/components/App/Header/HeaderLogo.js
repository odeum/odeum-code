import React from 'react'
import logo from '../../../assets/codejs_logo.png'
import * as styled from '../styles/HeaderStyles'

const HeaderLogo = () => {
     //TODO Reset/Unmount TabsWrapper
    return (
        <styled.HeaderLogoDiv>           
            <styled.LogoLink to="/dashboard/general">
                <styled.HeaderLogoImg src={logo} alt="Logo" />
            </styled.LogoLink>
        </styled.HeaderLogoDiv>
    )
}

export default HeaderLogo