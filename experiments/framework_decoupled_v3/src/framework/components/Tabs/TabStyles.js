import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router'
import Icon from 'framework/assets/Icon'
// import { getColor } from 'framework/assets/colors'

const onEnterText = keyframes`
    from{
        width:0%;
    }
    to{
        width:100%
    }
`
const onEnter = keyframes`
        from {
            opacity:0.5;
            max-width:0px;
        }
        to {
            opacity:1;
            max-width:200px;
        }
    `
export const TabCont = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-flow: row nowrap;
    align-items: center;
`
export const TabIcon = styled(Icon)`
 &:hover{
     color:white;
 }
`
export const TabLink = styled(Link) `
    display:flex;
    text-decoration: none;
    overflow: hidden;
    outline: 0;
    padding: 0px 20px 0px 20px;
    color: ${(props) => props.theme.tabs.TAB_TEXT};
    font-family:  ${(props) => props.theme.font};
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    user-select: none;
    &:hover{
        color:white;
      
    }
    ${props => props.className === true && css`
        color: white;
    `}    
`
export const TabCloseLink = styled(Link) `
    display:flex;
    user-select: none;
    text-decoration: none;
    outline: 0;
    color: ${(props) => props.theme.tabs.TAB_TEXT};
    font-family:  ${(props) => props.theme.font};
    font-style: normal;
    font-size: 14px;
    font-weight: 300;
    flex-flow:row;
    border-radius:2px;
    ${props => props.on === true && css`
        color: white;
    `}
    &:hover {
        background-color: #2C3E50;
        
    }
    transition: background 100ms ease;
    position:absolute;
    top:2px;
    right:2px;
`

export const TabText = styled.div`
    text-overflow: ellipsis;
    overflow:hidden;
    white-space: nowrap;
`
export const TabTextLoad = TabText.extend`
    animation: ${onEnterText} 300ms ease-in-out;    
`
export const TabDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    white-space: nowrap;
    overflow: hidden;
`
export const TabList = styled.ul`
    height: 40px;
    min-height: 40px;
    max-height:45px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    transition: all 300ms ease;
`
export const TabClose = styled.div`
    ${props => props.active === true && css`
      color:white;
    `}
    &:hover{
        color:white;
    }
    display:flex;

`
export const TabLabel = styled.li`
    display: flex;
    flex-flow: row nowrap;
    height: 40px;
    min-height:40px;
    line-height: 40px;
    max-width:200px;
    background-color:${(props) => props.theme.tabs.TAB};
    border-radius: 5px 5px 0px 0px;
    ${props => props.active === true && css`
        background-color: ${(props) => props.theme.tabs.TAB_SELECTED};
        color: ${(props) => props.theme.tabs.TAB_TEXT_SELECTED};
    `}
    &:hover{
        background-color:#81C1EA;
    }
    position:relative;
    margin-right: 1px;
    animation: ${onEnter} 300ms ease;
`
export const TabLoaderDiv = styled.div`
    width: 15px;
    margin: 0;
    margin-top:1px;
    margin-right:5px;
    font-size: 18px;
`
export const TabIconDiv = TabLoaderDiv.extend`
    margin-top: -3px;
    margin-right:5px;
    padding: 0;
    ${props => props.active === true && css`
         color: white;
    `}
 `
