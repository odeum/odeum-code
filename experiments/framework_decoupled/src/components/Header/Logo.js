import React from 'react'
import logo from 'assets/codejs_logo.png'
import {LogoLink, LogoDiv, LogoImg} from '../styles/HeaderStyles'

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