import styled from 'styled-components'

export const StyledInput = styled.input`
flex:1;
margin-right:5px;
height: 37px;
border: 1px solid #dedede;
border-radius: 3px;
background-color: #fff;
padding: 0;
padding-left: 10px;
font-family: 'Source Sans Pro';
font-size: 16px;
font-weight: 300;
color: #000;
outline: none;
-webkit-appearance: none;
transition: border 0.3s;
&:focus{
    border: 1px solid #3B97D3;
}
&::placeholder {
    color: #dedede;
}
&:-ms-input-placeholder {
    color: #dedede;
}
&::-webkit-input-placeholder {
    color: #dedede;
}
&::-moz-placeholder {
    color: #dedede;
    opacity: 1;
}
`

export default StyledInput