import React from 'react'

import * as Icons from 'react-icons/lib/md'
// import icon components { MdSettings } from 'react-icons/lib/md'

import * as iconnames from './icons'
import * as colors from './colors'


class Icon extends React.Component {

constructor(props) {
    super(props)
    this.defaultProps = {
        name: 'info',
        size: 75,
        color: colors.ICON_DEFAULT_COLOR,
        active: false
    }
  }

setColor(active) {
    if(active === true)
        {return(this.props.color)}
    else
        {return(this.defaultProps.color)}
}

getSubComponent(name, size) {
// All theme available icons must be in this switch

switch (name) {
    case iconnames.ICON_SETTINGS: 
    return <Icons.MdSettings 
                size={size || this.defaultProps.size} 
                color={this.setColor(this.props.active) || this.defaultProps.color} />
                
    case iconnames.ICON_MENU: return <Icons.MdMenu size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_INPUT: return <Icons.MdInput size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_TIMELINE: return <Icons.MdTimeline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_CODE: return <Icons.MdCode size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_OPACITY: return <Icons.MdOpacity size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_DASHBOARD: return <Icons.MdDashboard size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_HOME: return <Icons.MdHome size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_ASSIGNMENT: return <Icons.MdAssignment size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_ASSIGNMENT_TURNED_IN: return <Icons.MdAssignmentTurnedIn size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_PEOPLE: return <Icons.MdPeople size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_CLOUD: return <Icons.MdCloud size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_CLOUD_DOWNLOAD: return <Icons.MdCloudDownload size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_CLOUD_UPLOAD: return <Icons.MdCloudUpload size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_APPS: return <Icons.MdApps size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_LANGUAGE: return <Icons.MdLanguage size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_DATE_RANGE: return <Icons.MdDateRange size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />

    case iconnames.ICON_SEARCH: return <Icons.MdSearch size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_MESSAGES: return <Icons.MdChat size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_HELP: return <Icons.MdHelp size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} /> 
    case iconnames.ICON_LOCK: return <Icons.MdLockOutline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_INFO: return <Icons.MdInfo size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_LOCK_OPEN: return <Icons.MdLockOpen size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_CLOSE: return <Icons.MdClose size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_CHECK: return <Icons.MdCheck size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_CHECK_CIRCLE: return <Icons.MdCheckCircle size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_NOTIFICATIONS: return <Icons.MdNotifications size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_NOTIFICATIONS_ACTIVE: return <Icons.MdNotificationsActive size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_NOTIFICATIONS_NONE: return <Icons.MdNotificationsNone size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_NOTIFICATIONS_OFF: return <Icons.MdNotificationsOff size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_KEYBOARD_ARROW_DOWN: return <Icons.MdKeyboardArrowDown size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_KEYBOARD_ARROW_UP: return <Icons.MdKeyboardArrowUp size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_KEYBOARD_ARROW_LEFT: return <Icons.MdKeyboardArrowLeft size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconnames.ICON_KEYBOARD_ARROW_RIGHT: return <Icons.MdKeyboardArrowRight size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />


    default: return <Icons.MdInfo size={this.defaultProps.size} color={this.defaultProps.color} />
    }
}    
    render() {
        return (
            this.getSubComponent(this.props.icon, this.props.size)
        )        
    }
}

export default Icon


