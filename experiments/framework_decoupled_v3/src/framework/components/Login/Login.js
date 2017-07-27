import React from 'react'
import {Img,LoginLabel,BackgroundDiv,HeaderDiv,Input,InputDiv,LoginButton} from 'framework/components/styles/LoginStyles'
import HeaderLogo from '../../assets/codejs_logo.png'


const Login = ({onSubmit}) => {
    return (
        <BackgroundDiv>
            <HeaderDiv><Img src={HeaderLogo}/></HeaderDiv>
            <InputDiv>
             <LoginLabel>Username</LoginLabel>
            <Input/>
            </InputDiv>
           <InputDiv>
            <LoginLabel>Password</LoginLabel>
            <Input type='password'/>
           </InputDiv>
           <LoginButton onClick={(e)=>{e.preventDefault();onSubmit()}}>Login</LoginButton>
        </BackgroundDiv>
    )
}

export default Login