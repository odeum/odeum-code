import React from 'react';
import ODEUMLogo from '../../../assets/codejs_logo.png'
import {HeaderLogoDiv,HeaderLogoImg} from '../styled/HeaderStyle'
import PropTypes from 'prop-types'
const HeaderLogo = ({onPush}) => {
    return (
        <HeaderLogoDiv>
        <a href='#' onClick={e=>{
            e.preventDefault()
            onPush('/')
            }}>
           <HeaderLogoImg src={ODEUMLogo} alt="Logo"/> 
           </a>
        </HeaderLogoDiv>
    )
}
HeaderLogo.propTypes= {
    onPush:PropTypes.func.isRequired
}
export default HeaderLogo