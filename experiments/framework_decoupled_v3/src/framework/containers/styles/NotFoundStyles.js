import styled from 'styled-components'
import * as colors from 'framework/assets/colors'
import * as fonts from 'framework/assets/fonts'

export const Div = styled.div`
    text-align:center;
    background-color: ${colors.ACCENT_BLUE};
    width: 100%;
    height: 100%;
    z-index: 9999; 
    position: fixed; 
    top: 0; 
    left: 0; 
`

export const Img = styled.img`
    margin-top: 50px;
    margin-bottom: 30px;
    height: 28px;
    width: 240px;
`

export const ImgDiv = styled.div`
    width: 100%;
    background-color: ${colors.ASPHALT_LIGHT}
`

export const ErrMsg = styled.h3`
    color: white;
    font-family: ${fonts.PRIMARY};
    font-style: normal;
    font-weight: 400;
`

export const ErrMsg2 = styled.h3`
    clear: both;
    display: block;
    z-index: 1000;
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: white;
    font-family: ${fonts.PRIMARY};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`

export const E404 = styled.p`
    font-size: 50px;
    color: white;
    font-family: ${fonts.PRIMARY};
    font-style: normal;
    font-weight: 400;
`