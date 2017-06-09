import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import Icon from '../../../assets/Icon'

// TODO Refactor active to bool
export const PanelDiv = styled.div`
    height: calc(100vh - 240px);
    padding: 20px;
    font-family: ${(props)=> props.theme.font};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background-color: #fff;
    border-radius: 0px 5px 5px 5px;
    overflow: scroll;
`
export const TabLink = styled(Link)`
    display:inline-block;
    text-decoration: none;
    height:100%;
    outline: 0;
    color: ${(props)=> props.theme.tabs.TAB_TEXT};
    font-family:  ${(props)=> props.theme.font};
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    ${props => props.className === 'active' && css`
        color: white;
    `}
    padding-left: 20px;
    padding-right: 20px;
`
export const TabCloseLink = styled(Link)`
    display:inline-block;
    text-decoration: none;
    height:100%;
    outline: 0;
    color: ${(props)=> props.theme.tabs.TAB_TEXT};
    font-family:  ${(props)=> props.theme.font};
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    ${props => props.className === 'active' && css`
        color: white;
    `}
`

export const TabDiv=styled.div`
display:inline-flex;
`
export const TabList = styled.ul`
    height: 40px;
    margin: 0;
    padding: 0;
    padding:20px 0px 0px 10px;
    overflow-y:hidden;
`
export const TabClose = styled.div`
    position: absolute;
    top:-13px;
    right:3px;
    ${props => props.className === 'active' && css`
      color:white;
    `}
`
export const TabLabel = styled.li`
    display: inline-flex;
    height: 40px;
    line-height: 40px;
    background-color:${(props)=> props.theme.tabs.TAB};
    border-radius: 5px 5px 0px 0px;
    ${props => props.className === 'active' && css`
        background-color: ${(props)=> props.theme.tabs.TAB_SELECTED};
        color: ${(props)=> props.theme.tabs.TAB_TEXT_SELECTED};
    `}
    position:relative;
    margin-right: 1px;
`

export const TabIconDiv = styled.div`
   margin: 0;
    margin-top: -1px;
    margin-right: 3px;
    padding: 0;
    font-size: 18px;
    ${props => props.className === 'active' && css`
        color: white;
    `}
    `
export const TabIcon = styled(Icon)`
 
`

export const TabWrapperDiv = styled.div`
    clear: both;
    width: 100%;
`