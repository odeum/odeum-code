import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import Icon from '../../../assets/Icon'

export const MenuWrapperDiv = styled.div`
  clear: both;
  background-color: #3b97d3;
  width: 250px;
  height: calc(100vh - 180px);
  float: left;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const MenuPanelDiv = styled.div`
  height: 50px;
  line-height: 50px;
  background-color: #3b97d3;
  border-bottom: 1px solid #3087bf;
  cursor: pointer;
  color: #fff;
  font-family: 'Source Sans Pro';
  font-size: 15px;
  font-weight: 300;
  text-decoration: none;
  padding-left: 20px;
  user-select: none;
  ${props => props.className === "active" && css`
    background-color: #81c1ea;
  `}
  &:first-of-type {
    border-top: 1px solid #3087bf;
  }
  &:hover {
    background-color: #81c1ea;
  }
 
`
export const MenuLink = styled(Link) `
text-decoration:none;
outline:0;
color:white;
width:100%;
height:100%;
display:block;
`

export const StyledIconDiv = styled.div`
  float: left;
  font-size: 16px;
  margin: 0;
  margin-top: -3px;
  margin-right: 10px;
  padding: 0;
`
export const StyledIcon = styled(Icon)`

`

export const Arrow = styled.div`
  float: right;
  // color: #297cb2;
  color: #fff;
  font-size: 25px;
  margin: 0;
  margin-top: -3px;
  margin-right: 10px;
  padding: 0;
  &:hover {
    color: #fff;
  }
`
export const MenuItemLink = styled.a`
  color: #fff;
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  padding-left: 20px;
  // &:hover {
  //   color:black;
  // }
`
