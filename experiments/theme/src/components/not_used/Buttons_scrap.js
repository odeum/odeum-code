// Buttons alternative

/*eslint-disable*/

<Button size="large">Large Button </Button>
<Button>alternative Button </Button>
<Button size="small">Small Button </Button>
<Button size="extra-small">Extra Small Button </Button>

<Button primary>Primary Button</Button>
<Button success>Success Button</Button>
<Button warning>Warning Button</Button>
<Button danger>Danger Button</Button>
<Button disabled>Disabled Button</Button>

<Button alternative-primary>Primary Button</Button>
<Button alternative-success>Success Button</Button>
<Button alternative-warning>Warning Button</Button>
<Button alternative-danger>Danger Button</Button>
<Button alternative-disabled>Disabled Button</Button>

<Button hollow-primary>Primary Button</Button>
<Button hollow-success>Success Button</Button>
<Button hollow-warning>Warning Button</Button>
<Button hollow-danger>Danger Button</Button>
<Button hollow-disabled>Disabled Button</Button>

<Button type={'primary'} icon={ICON_MAIL_OUTLINE} size={'large'}>This is a button</Button>



<ButtonGroup>
	<Button alternative-primary>Left</Button>
	<Button alternative-primary>Middle</Button>
	<Button alternative-primary>Right</Button>
</ButtonGroup>


Button.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string, 
  active: PropTypes.bool,
  style: PropTypes.shape({
    verticalAlign: PropTypes.string
  })
}

/*eslint-enable*/



import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ButtonStyle from './ButtonStyles'
import Icon from './Icon'
import * as iconname from './icons'
import * as colors from './colors'

class Button2 extends Component {
    render() {
        return (
            <ButtonStyle>
                <Icon icon={iconname.ICON_MAIL_OUTLINE} size={34} color={colors.BUTTON_TEXT} active={true} style={theme.iconstyle} />
            </ButtonStyle>
        )
    }
}

Button.propTypes = {

}

export default Button



export const ButtonGreen = styled.button`
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-family: Source Sans Pro;
    color: ${(props) => props.theme.buttoncolor || 'white'}
    font-size: 18px;
    background: ${(props) => props.theme.buttonbackground || colors.BUTTON_ALTERNATIVE}
    padding: 10px 20px 10px 20px;
    margin-right: 0.7rem;
    border: none;
    text-decoration: none;

    &:focus {
        border-color: ${colors.BUTTON_ALTERNATIVE_FOCUS};
        box-shadow: 0 0 0 3px ${transparentize(0.7, colors.BUTTON_ALTERNATIVE_FOCUS)};
        outline: none;
    }

    &&.is-active,
    &&:active {
        background: #e6e6e6; /*${darken(0.1, colors.BUTTON_ALTERNATIVE)};*/
        border-color: ${darken(0.1, colors.BUTTON_ALTERNATIVE)};
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
    }

    &.is-active:focus:not(:active) {
		border-color: ${darken(0.1, colors.BUTTON_ALTERNATIVE)};
		box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
	}

    &:hover {
    background: ${colors.BUTTON_ALTERNATIVE_HOVER};
    }

`


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

export const Button1 = styled.button`

    background: ${(props) => props.theme.background || 'lightblue'}
	border: 1px solid ${(props) => props.theme.background || 'lightblue'}
	border-radius: 4px;
	cursor: pointer;
	display: inline-block;
	font-weight: 400;
	line-height: 2.3em;
	height: 25px;
	margin-bottom: 0;
	overflow: hidden; 
	padding: 10px 20px;
	text-align: center;
	touch-action: manipulation;
	vertical-align: middle;
	white-space: nowrap;
	-webkit-appearance: none;

	&:hover,
	&:focus,
	&.focus,
	&.is-focus {
		color: ${(props) => props.theme.button || 'white'}
		text-decoration: none;
	}

	&:active,
	&.active,
	&.is-active {
		background-image: none;
		outline: 0;
	}

	&.disabled,
	&[disabled] {
		opacity: .4;
		pointer-events: none;
	}
`



    /*box-shadow: 0 1px 0 rgba(0,0,0,0.1);*/
    /*  background-image: -webkit-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -moz-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -ms-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -o-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: linear-gradient(to bottom, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    */  

    