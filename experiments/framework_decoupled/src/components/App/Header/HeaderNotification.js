import React, { Component } from 'react'
import { HeaderNotificationDiv, HeaderNotificationIcon, HeaderNotificationBadgeSpan } from '../styles/HeaderStyles'
import Icon from '../../../assets/Icon'
import { ICON_NOTIFICATIONS_NONE } from '../../../assets/icons'
// ICON_NOTIFICATIONS, ICON_NOTIFICATIONS_ACTIVE
// import * as colors from '../../../assets/colors'


class HeaderNotification extends Component {
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

export default HeaderNotification