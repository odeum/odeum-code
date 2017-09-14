import styled, { css } from 'styled-components'
import { Link } from 'react-router'

import { getColor } from 'framework/assets/colors'

export const PanelDiv = styled.div`
    height: calc(100vh - 240px);
    /*padding: 20px;*/
    font-family: ${(props) => props.theme.font};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background-color: #fff;
    border-radius: 0px 4px 4px 4px;
    overflow: scroll;
`
export const TabText = styled.p`
${props => props.active === true && css`
    color:white;
`}
`
export const TabLink = styled(Link)`
    display:flex;
    text-decoration: none;
    height:100%;
    outline: 0;
    color: ${(props) => props.theme.tabs.TAB_TEXT};
    font-family:  ${(props) => props.theme.font};
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    &:hover{
        color:white;
    }
    ${props => props.className === true && css`
        color: white;
    `}
    padding-left: 20px;
    padding-right: 20px;
`
export const TabCloseLink = styled(Link)`
    display:flex;
    text-decoration: none;
    height:100%;
    outline: 0;
    color: ${(props) => props.theme.tabs.TAB_TEXT};
    font-family:  ${(props) => props.theme.font};
    font-style: normal;
    font-size: 14px;
    font-weight: 300;
    ${props => props.on === true && css`
        color: white;
    `}
`

export const TabDiv = styled.div`
display: flex;
flex-direction: row;
align-items:center;
`
export const TabList = styled.ul`
    height: 40px;
    margin: 0;
    padding: 0;
    /*padding: 20px 0px 0px 20px;*/
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
`
export const TabClose = styled.div`
    position: absolute;
    top:-13px;
    right:3px;
    ${props => props.active === true && css`
      color:white;
    `}
`
export const TabLabel = styled.li`
    display: inline-flex;
    height: 40px;
    line-height: 40px;
    background-color:${(props) => props.theme.tabs.TAB};
    border-radius: 5px 5px 0px 0px;
     &:hover{
        background-color: ${getColor('TAB_COLOR_1')};
    }
    ${props => props.active === true && css`
        background-color: ${(props) => props.theme.tabs.TAB_SELECTED};
        color: ${(props) => props.theme.tabs.TAB_TEXT_SELECTED};
    `}
   
    position:relative;
    margin-right: 1px;
`
export const TabLoaderDiv = styled.div`
    width: 18px;
    margin: 0;
    margin-top:1px;
    margin-left:1px;
    font-size: 18px;
`
export const TabIconDiv = TabLoaderDiv.extend`
    margin-top: -3px;
    padding: 0;
    ${props => props.active === true && css`
         color: white;
    `}
 `

export const TabWrapperDiv = styled.div`
    clear: both;
    width: 100%;
`