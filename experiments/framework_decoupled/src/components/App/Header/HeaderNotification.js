import React, { Component } from 'react'
import {HeaderNotificationDiv,HeaderNotificationIcon,HeaderNotificationBadgeSpan} from '../styles/HeaderStyles'
import {renderIcons} from '../../../assets/icons'

class HeaderNotification extends Component {
    render() {
        return (
            <HeaderNotificationDiv>
                <HeaderNotificationIcon>
                    {renderIcons('notifications','active')}
                    <HeaderNotificationBadgeSpan>12</HeaderNotificationBadgeSpan>
                </HeaderNotificationIcon>
            </HeaderNotificationDiv>
        )
    }
}

export default HeaderNotification