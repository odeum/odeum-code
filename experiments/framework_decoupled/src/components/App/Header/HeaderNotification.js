import React, { Component } from 'react'
import {HeaderNotificationDiv, HeaderNotificationIcon, HeaderNotificationBadgeSpan} from '../styles/HeaderStyles'
// import {renderIcons} from '../../../assets/icons'

import Icon from '../../../assets/Icon'
import {ICON_NOTIFICATIONS} from '../../../assets/icons'
// import * as colors from '../../../assets/colors'

class HeaderNotification extends Component {
    render() {
        return (
            <HeaderNotificationDiv>
                <HeaderNotificationIcon>
                    {/*{renderIcons('notifications','active')}*/}
                    <Icon icon={ICON_NOTIFICATIONS} size={25} active={'no'}/>
                    <HeaderNotificationBadgeSpan>12</HeaderNotificationBadgeSpan>
                </HeaderNotificationIcon>
            </HeaderNotificationDiv>
        )
    }
}

export default HeaderNotification