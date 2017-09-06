import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router'
import Icon from 'framework/assets/Icon'
import { getColor } from 'framework/assets/colors'

const sizes = {
	xxs: '5px',
	xs: '20px',
	small: '50px',
	medium: '80px',
	large: '120px',
	xl: '250px'
}

const velocities = {
	slow: '3s',
	medium: '2s',
	fast: '1s'
}


const rotate360 = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`
export const SpinLogo = styled.div`
display: inline-block;
animation: ${rotate360} ${props => props.time || '1s'} linear infinite;
&:hover {
    animation: ${rotate360} 3s linear infinite;
}
`

export const StyledLoader = styled.div`
display: inline-block;
border: ${({ size }) => sizes[size]} solid #E3E5E5;
border-radius: 50%;
border-top: ${({ size }) => sizes[size]} solid #3498db;
 width: ${({ size }) => sizes[size]};
height: ${({ size }) => sizes[size]};
animation: ${rotate360} ${({ velocity }) => velocities[velocity]} linear infinite;
`
StyledLoader.defaultProps = {
	size: 'medium',
	velocity: 'fast'
}

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
    display:inline-block;
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
    display:inline-block;
    text-decoration: none;
    height:100%;
    outline: 0;
    color: ${(props) => props.theme.tabs.TAB_TEXT};
    font-family:  ${(props) => props.theme.font};
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    ${props => props.on === true && css`
        color: white;
    `}
`

export const TabDiv = styled.div`
display:inline-flex;
`
export const TabList = styled.ul`
    height: 40px;
    margin: 0;
    padding: 0;
    /*padding: 20px 0px 0px 20px;*/
    overflow-y: hidden;
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

export const TabIconDiv = styled.div`
   margin: 0;
    margin-top: -1px;
    margin-right: 3px;
    padding: 0;
    font-size: 18px;
    ${props => props.active === true && css`
        color: white;
    `}
    `
export const TabIcon = styled(Icon)`
 
`

export const TabWrapperDiv = styled.div`
    clear: both;
    width: 100%;
`