import React, { Component } from 'react'
import {HeaderNotificationDiv, 
        HeaderNotificationIcon, 
        HeaderNotificationBadgeSpan} from 'framework/components/Styles/HeaderStyles'
import {ICON_NOTIFICATIONS_NONE} from 'assets/icons'
import Icon from 'assets/Icon'

class Notification extends Component {
    render() {
        return (
            <HeaderNotificationDiv>
                <HeaderNotificationIcon>
                    <Icon icon={ICON_NOTIFICATIONS_NONE} size={35} active={true}/>
                    <HeaderNotificationBadgeSpan>42</HeaderNotificationBadgeSpan>
                    </HeaderNotificationIcon>
            </HeaderNotificationDiv>
        )
    }
}

export default Notification