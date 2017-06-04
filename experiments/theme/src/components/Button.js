import styled from 'styled-components'
import { transparentize } from 'polished'
import * as colors from './colors'

const Button = styled.button`
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  font-family: Arial;
  color: ${(props) => props.theme.button || 'white'}
  font-size: 34px;
  background: ${(props) => props.theme.background || colors.BUTTON_PRIMARY}
  padding: 10px 20px 10px 20px;
  border: none;
  text-decoration: none;

&:focus {
   
    border-color: ${colors.BUTTON_PRIMARY_FOCUS};
	box-shadow: 0 0 0 3px ${transparentize(0.7, colors.BUTTON_PRIMARY)};
	outline: none;
  }
/* 

transparentize(0.5, colors.BUTTON_PRIMARY_FOCUS) 
opacify(0.1, 'rgba(59, 151, 211, 0.1)')

*/

&:hover {
  background: ${colors.BUTTON_PRIMARY_HOVER};
  /*box-shadow: 0 1px 0 rgba(0,0,0,0.1);*/
/*  background-image: -webkit-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
  background-image: -moz-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
  background-image: -ms-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
  background-image: -o-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
  background-image: linear-gradient(to bottom, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
*/  text-decoration: none;
}
`

export default Button
