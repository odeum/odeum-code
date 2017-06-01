import React from 'react'
import * as styled from './styles/NotFoundStyles'
import HeaderLogo from '../../assets/codejs_logo.png'
const NotFound = () => {
    return (
        <styled.Div>
            <styled.ImgDiv><styled.Img src={HeaderLogo} alt="Logo" /></styled.ImgDiv>
            <styled.e404> 404 Not Found</styled.e404>
            <styled.ErrMsg> Welcome to the dark side!<br/> We have cookies! </styled.ErrMsg>
            <styled.ErrMsg2>There's nothing to see here... so you should go back </styled.ErrMsg2>
        </styled.Div>
    )
}

export default NotFound