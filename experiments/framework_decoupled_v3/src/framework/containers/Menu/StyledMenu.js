import styled from 'styled-components'

export const MenuDiv = styled.div`
display:flex;
flex-flow: column;
align-items:center;
align-self:left;
background-color: #3b97d3;
color:white;
height:100%;
transition: all 300ms ease;
width: ${props => props.close ? '250px' : '50px'};
`
export const MenuHeader = styled.div`
height:50px;
display:flex;
align-items:center;
background-color: #3b97d3;
border-bottom: 1px solid #3087bf;
font-size:15px;
width:100%;
justify-content: ${props => props.close ? '' : 'center'};
`
export const MenuIconDiv = styled.div`
width:20px;
height:20px;
display:flex;
cursor:pointer;
margin: 3px 10px 0px 10px;
justify-content:center;
&:hover {
    background-color: #81c1ea;
}
`