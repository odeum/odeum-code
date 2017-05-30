import React from 'react'
import ODEUMLogo from '../../../assets/codejs_logo.png'
import * as styled from '../styles/HeaderStyles'

const HeaderLogo = () => {
     //TODO Reset/Unmount TabsWrapper
    return (
        <styled.HeaderLogoDiv>
           
            <styled.LogoLink to="/">
                <styled.HeaderLogoImg src={ODEUMLogo} alt="Logo" />
            </styled.LogoLink>
        </styled.HeaderLogoDiv>
    )
}

export default HeaderLogo