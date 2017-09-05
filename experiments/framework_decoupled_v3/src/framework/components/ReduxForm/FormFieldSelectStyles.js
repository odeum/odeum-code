import styled from 'styled-components'

export const StyledFormFieldSelect  = styled.select `
 	box-sizing: border-box;
	width: 100%;
	height: 40px;
	background-color: #ecf0f1;
	color: #5e5e5e;
	font-family: 'Source Sans Pro';
	font-size: 16px;
	font-weight: 300;
	border-radius: 3px;
	// border: none;
	border: ${(props) => {
		return props.meta.touched && props.meta.error ? '1px solid red' : 'none'
	}};
	margin-bottom: 15px;
	padding-left: 10px;
	padding-right: 10px;

	&:hover {
		box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
	}
`