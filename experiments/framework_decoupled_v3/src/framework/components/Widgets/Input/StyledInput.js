import styled from 'styled-components'

export const StyledInput = styled.input`
flex:1;
margin-right:5px;
width: ${(props) => props.width || '100%'};
height: 37px;
border: 1px solid #dedede;
border-radius: 3px;
background-color: #fff;
margin-top: 3px;
padding: 0;
padding-left: 10px;
font-family: 'Source Sans Pro';
margin-right: 0.7rem;
font-size: 16px;
font-weight: 400;
color: #000;
outline: none;
-webkit-appearance: none;
transition: border 0.3s;
&:focus{
    border: 1px solid #3B97D3;
}
&::placeholder {
    color: gray;
}
&:-ms-input-placeholder {
    color: gray;
}
&::-webkit-input-placeholder {
    color: gray;
}
&::-moz-placeholder {
    color: gray;
    opacity: 1;
}
`

export default StyledInput