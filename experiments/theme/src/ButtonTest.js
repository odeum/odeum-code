import React, { PureComponent } from 'react'

import * as iconname from './components/icons'
import * as colors from './components/colors'

import theme from './components/theme'
import Icon from './components/Icon'
import Button from './components/Button'
import StyledButton from './components/ButtonStyles'
import { Text } from './components/Styles'


export class ButtonTest extends PureComponent {
    render() {
        return (
            <div>
                <StyledButton><Icon icon='dashboard' size={18} color={colors.COMP_BLUE} active={true} style={theme.iconStyle} />Dashboard</StyledButton>
                <StyledButton><Icon icon={iconname.ICON_MAIL_OUTLINE} size={18} color={colors.BUTTON_TEXT} active={true} style={theme.iconStyle} />Task New Meeting</StyledButton>
                <StyledButton><Icon icon={iconname.ICON_ASSIGNMENT} size={18} color={colors.COMP_ORANGE} active={true} style={{verticalAlign: '-3px', paddingRight: '16px'}} />Styles overridden</StyledButton>
                
                <Button icon={iconname.ICON_MAIL_OUTLINE} size={18}>Mail</Button>
                <Button icon={iconname.ICON_CHECK_CIRCLE} size={18}>Save</Button>
                <Button icon={iconname.ICON_MAIL_OUTLINE} size={18}>Normal button</Button>
                <Button icon={iconname.ICON_CHECK_CIRCLE} size={18}>Normal themed button</Button>
                <Button icon={iconname.ICON_LAPTOP_MAC} size={18}>Button Component</Button>
            </div>
        )
    }
}

export const ButtonTest2 = () => {
    return (
        <div>
            <StyledButton><Icon icon='dashboard' size={18} color={colors.TAB_COLOR_6} active={true} style={theme.iconStyle} />Dashboard</StyledButton>
            <StyledButton><Icon icon={iconname.ICON_MAIL_OUTLINE} size={18} color={colors.BUTTON_TEXT} active={true} style={theme.iconStyle} />Task New Meeting</StyledButton>
            <StyledButton><Icon icon={iconname.ICON_ASSIGNMENT} size={18} color={colors.TAB_COLOR_5} active={true} style={{verticalAlign: '-3px', paddingRight: '6px'}} />Forms</StyledButton>
            
            <Button icon={iconname.ICON_MAIL_OUTLINE} size={18}><Text>Styled text</Text></Button>
            <Button icon={iconname.ICON_CHECK_CIRCLE} size={18}>Save</Button>
            <Button icon={iconname.ICON_MAIL_OUTLINE} size={18}>Mail</Button>
            <Button icon={iconname.ICON_CLOUD} size={18}>Stateless component</Button>
        </div>
    )
}
