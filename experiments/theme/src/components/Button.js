// Button.js
import styled from 'styled-components'

const Button = styled.button`
  /* Adjust the Button styling based on the theme */
  &&& {
    
  background: ${(props) => props.theme.background || 'lightblue'}
  border: 2px solid ${(props) => props.theme.background || 'lightblue'}
  color: ${(props) => props.theme.button || 'white'}
  font-family: ${(props) => props.theme.font || 'sans-serif'}

  border-radius: 4px
  padding: 0.5rem 1rem
  text-decoration: none
  font-size: 1rem
  margin: 0 1rem
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);

  &:hover { 
      box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
      background: #014464; 
      background: -moz-linear-gradient(top, #0c5f85, #0b5273 50%, #024869 51%, #003853); 
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0c5f85), color-stop(.5, #0b5273), color-stop(.51, #024869), to(#003853)); 
    }

  &:active { 
          -moz-box-shadow: 0 2px 6px black; 
          -webkit-box-shadow: 0 2px 6px black; 
      }
  }
`
export default Button
