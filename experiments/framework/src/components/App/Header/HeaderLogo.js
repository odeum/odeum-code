import React from 'react'
// import {Link} from 'react-router-dom'
import ODEUMLogo from '../../../assets/codejs_logo.png'
import {HeaderLogoDiv,HeaderLogoImg} from '../styles/HeaderStyles'
// import PropTypes from 'prop-types'
const HeaderLogo = ({onPush}) => {
    return (
        <HeaderLogoDiv>
            {/*@LINK TO -> instead of aHref*/}
     <a href="/">
           <HeaderLogoImg src={ODEUMLogo} alt="Logo"/> 
           </a>
        </HeaderLogoDiv>
    )
}
HeaderLogo.propTypes= {
    // onPush:PropTypes.func.isRequired
}
export default HeaderLogo