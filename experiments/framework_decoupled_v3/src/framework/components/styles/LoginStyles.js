import styled from 'styled-components'
import { getColor } from 'framework/assets/colors'
import * as fonts from 'framework/assets/fonts'

export const BackgroundDiv = styled.div`
    background-color: ${getColor('ACCENT_BLUE')};
    height: 100%;
    width: 100%;
    z-index: 9999;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`
export const LoginButton = styled.button`
    border-radius: 4px;
    font-family: ${fonts.PRIMARY};
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    color: white;
    background: ${getColor('ASPHALT_LIGHT')};
    padding: 9px 20px 9px 20px;
    margin: 0.7rem;
    border: none;
    text-decoration: none;
        &:hover {
            background: ${getColor('TAB_SELECTED')};
    }
        &:active{
        background: ${getColor('TAB_HOVER')};
        } 
`
export const Img = styled.img`
    margin-top: 50px;
    margin-bottom: 30px;
    height: 28px;
    width: 240px;
`

export const HeaderDiv = styled.div`
    background-color: ${getColor('ASPHALT_LIGHT')};
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;
`

export const LoginLabel = styled.h2`
    color: white;
    font-family: ${fonts.PRIMARY};
    font-style: normal;
    font-weight: 400;
    margin: 0;
    font-size: 18px;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid #dedede;
    border-radius: 3px 0 0 3px;
    background-color: #fff;
    padding: 0;
    padding-left: 10px;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 300;
    color: #000;
    outline: none;
    -webkit-appearance: none;

    &::placeholder {
        color: #fff;
    }
    &:-ms-input-placeholder {
        color: #fff;
    }
    &::-webkit-input-placeholder {
        color: #fff;
    }
    &::-moz-placeholder {
        color: #fff;
        opacity: 1;
    }
`
export const InputDiv = styled.div`
    width: 300px;
    margin-bottom: 20px;
`