import styled from 'styled-components'
import { Link } from 'react-router'

export const MenuItemDiv = styled.div`
display:flex;
align-items:center;
height:50px;
background-color: ${(props) => props.active ? '#216795' : '#3b97d3'} ;
border-bottom: 1px solid #3087bf;
cursor: pointer;
color: #fff;
font-family: 'Source Sans Pro';
font-size: 15px;
font-weight: 300;
text-decoration: none;
user-select: none;
width:100%;
&:first-of-type {
    border-top: 1px solid #3087bf;
}
&:hover {
    background-color: #81c1ea;
}
box-sizing: border-box;
overflow: hidden;
`
export const MenuLabel = styled.div`
/* max-width: ${props => props.close ? '200px' : '0px'}; */
overflow:  hidden;
line-height: 50px;
white-space: nowrap;
transition: max-width 300ms ease;
`

export const MenuIconDiv = styled.div`
width:18px;
height:18px;
display:flex;
font-size:20px;
cursor:pointer;
margin: 0px 15px 0px 15px;
align-items:center;
`

export const Arrow = styled.div`
/* max-width: ${props => props.close ? '30px' : '0px'};*/
overflow:  hidden;
transition: max-width 300ms ease;
margin-left:auto;
margin-right:5px; 
font-size: 25px;
`

export const MenuLink = styled(Link) `
text-decoration:none;
outline:0;
color:white;
width:100%;
height:100%;
display:flex;
align-items:center;
`

export const MenuItemCont = styled.div`
/* width:${props => props.close ? '100%' : '50px'}; */
width:100%;
height:100%;
display:flex;
align-items:center;
`