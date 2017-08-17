import React from 'react'
// import * as styled from '../styles/NotFoundStyles'
import { Div, ImgDiv, E404, ErrMsg, ErrMsg2, Img } from '../styles/NotFoundStyles'
import HeaderLogo from '../../assets/codejs_logo.png'
const NotFound = () => {
    return (
        <Div>
          <ImgDiv>
            <Img src={ HeaderLogo } alt="Logo" />
          </ImgDiv>
          <E404>404 Not Found</E404>
          <ErrMsg>Welcome to the dark ... well ... blue side!
            <br/>We have cookies!</ErrMsg>
		  <ErrMsg2>There's absolutely nothing to see here ... so you should go back and go about your business!</ErrMsg2>
        </Div>
    )
}

export default NotFound