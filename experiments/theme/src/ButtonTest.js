import React, { Component } from 'react'

import * as iconname from './components/icons'
import * as colors from './components/colors'

import theme from './components/theme'
import Icon from './components/Icon'
import Button from './components/Button'

class Button2 extends Component {

    render() {
        return (
            <Button>
                <Icon icon={this.props.icon} size={this.props.size} color={colors.BUTTON_TEXT} active={true} style={theme.iconStyle} />{this.props.children}
            </Button>
        )
    }
}

class ButtonTest extends Component {
    render() {
        return (
            <div>
                <Button><Icon icon='dashboard' size={18} color={colors.TAB_COLOR_6} active={true} style={theme.iconStyle} />Dashboard</Button>
                <Button><Icon icon={iconname.ICON_MAIL_OUTLINE} size={18} color={colors.BUTTON_TEXT} active={true} style={theme.iconStyle} />Task New Meeting</Button>
                <Button><Icon icon={iconname.ICON_ASSIGNMENT} size={18} color={colors.TAB_COLOR_5} active={true} style={{verticalAlign: '-3px', paddingRight: '6px'}} />Forms</Button>
                
                <Button2 icon={iconname.ICON_MAIL_OUTLINE} size={18}>Mail</Button2>
                <Button2 icon={iconname.ICON_CHECK_CIRCLE} size={18}>Save</Button2>                
                <Button2 icon={iconname.ICON_MAIL_OUTLINE} size={18}>Mail</Button2>
                <Button2 icon={iconname.ICON_CHECK_CIRCLE} size={18}>Save</Button2>                
            </div>
        )
    }
}

export default ButtonTest


