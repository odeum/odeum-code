import React, { Component } from 'react'
import Logo from 'framework/components/Header/Logo'
import Notification from 'framework/components/Header/Notification'
import Search from 'framework/components/Header/Search'
import {HeaderDiv} from 'framework/components/Styles/HeaderStyles'

class HeaderContainer extends Component {
    render() {
        return (
            <HeaderDiv>
                <Logo />
                <Search />
                <Notification/>
            </HeaderDiv>
        )
    }
}

export default HeaderContainer