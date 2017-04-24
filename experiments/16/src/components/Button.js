// Button.js
import styled from 'styled-components'

const Button = styled.button`
  /* Adjust the Button styling based on the theme */
  background: ${(props) => props.theme.background || 'lightblue'}
  border: 2px solid ${(props) => props.theme.background || 'lightblue'}
  color: ${(props) => props.theme.color || 'white'}
  font-family: ${(props) => props.theme.font || 'sans-serif'}
/*  color: white; */
  border-radius: 3px
  padding: 0.5em 2em
  text-decoration: none
  font-size: 1em
  margin: 0 1em
`
export default Button
