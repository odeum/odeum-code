import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import * as iconname from './components/icons'
import * as colors from './colors'

import theme from './theme'
import Icon from './Icon'
import StyledButton from './ButtonStyles'


//TODO: constructor, switch buttonType, sizes, fonts!!!
class Button extends Component {

    render() {
        return (
            <StyledButton>
                <Icon icon={this.props.icon} size={this.props.size} color={colors.BUTTON_TEXT} active={true} style={theme.iconStyle} />{this.props.children}
            </StyledButton>
        )
    }
}

Button.defaultProps = {
    name: 'info',
    size: 75,
    color: colors.ICON_DEFAULT_COLOR,
    active: false,
    style: {
        verticalAlign: '-5px',           
        paddingRight: '8px'
    }
}

Button.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string, 
    active: PropTypes.bool,
    style: PropTypes.shape({
        verticalAlign: PropTypes.string,
        paddingRight: PropTypes.string
    })
}

export default Button