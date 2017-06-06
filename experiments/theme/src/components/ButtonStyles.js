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