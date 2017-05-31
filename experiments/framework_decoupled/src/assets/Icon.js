import React from 'react'
import PropTypes from 'prop-types'

import * as Icons from 'react-icons/lib/md'
import * as iconname from './icons'
import { ICON_DEFAULT_COLOR,ICON_ACTIVE_COLOR } from './colors'

// TODO: Why is defaultProps.active changed from bool to string?

class Icon extends React.Component {

constructor(props) {
  
    super(props)
    this.defaultProps = {
        icon: 'info',
        size: 15,
        color: ICON_DEFAULT_COLOR,
        active: '',
        style: {
       
        }
    }    
  }
  
setColor(active) {
    // console.log(active)
    if(active.includes('active'))
        {return(ICON_ACTIVE_COLOR)}
    else
        {return(this.defaultProps.color)}
}

// setColor(active) {
//     if(active.include('active'))
//         {return(this.props.color)}
//     else
//         {return(this.defaultProps.color)}
// }

getSubComponent(name, size) {
// All theme available icons must be in this switch

switch (name) {    
    case iconname.ICON_MENU: {
        return <Icons.MdMenu 
            size={size || this.defaultProps.size} 
            color={this.setColor(this.props.active) || this.defaultProps.color} 
            style={this.defaultProps.style} />
    }
    case iconname.ICON_SETTINGS: return <Icons.MdSettings size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_INPUT: return <Icons.MdInput size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_TIMELINE: return <Icons.MdTimeline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CODE: return <Icons.MdCode size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_OPACITY: return <Icons.MdOpacity size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_DASHBOARD: return <Icons.MdDashboard size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_HOME: return <Icons.MdHome size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ASSIGNMENT: return <Icons.MdAssignment size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ASSIGNMENT_TURNED_IN: return <Icons.MdAssignmentTurnedIn size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PEOPLE: return <Icons.MdPeople size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_GROUP_ADD: return <Icons.MdGroupAdd size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PERSON: return <Icons.MdPerson size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PERSON_ADD: return <Icons.MdPersonAdd size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_MAIL_OUTLINE: return <Icons.MdMailOutline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SETTINGS_CELL: return <Icons.MdSettingsCell size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_EXTENSION: return <Icons.MdExtension size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ARROW_DROP_DOWN: return <Icons.MdArrowDropDown size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ARROW_DROP_UP: return <Icons.MdArrowDropUp size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_COPYRIGHT: return <Icons.MdCopyright size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CLOUD: return <Icons.MdCloud size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CLOUD_DOWNLOAD: return <Icons.MdCloudDownload size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CLOUD_UPLOAD: return <Icons.MdCloudUpload size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_APPS: return <Icons.MdApps size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_LANGUAGE: return <Icons.MdLanguage size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_DATE_RANGE: return <Icons.MdDateRange size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_MODE_EDIT: return <Icons.MdModeEdit size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PLACE: return <Icons.MdPlace size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PHONE: return <Icons.MdPhone size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_VISIBILITY: return <Icons.MdVisibility size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_VISIBILITY_OFF: return <Icons.MdVisibilityOff size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ACCOUNT_BOX: return <Icons.MdAccountBox size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_INSERT_DRIVE_FILE: return <Icons.MdInsertDriveFile size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_VIEW_HEADLINE: return <Icons.MdViewHeadline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_VIEW_MODULE: return <Icons.MdViewModule size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SHARE: return <Icons.MdShare size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_FAVORITE: return <Icons.MdFavorite size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_FAVORITE_BORDER: return <Icons.MdFavoriteBorder size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_LABEL: return <Icons.MdLabel size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_LABEL_OUTLINE: return <Icons.MdLabelOutline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_STAR: return <Icons.MdStar size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_STARS: return <Icons.MdStars size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_TODAY: return <Icons.MdToday size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PLAY_CIRCLE_FILLED: return <Icons.MdPlayCircleFilled size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PLAY_CIRCLE_OUTLINE: return <Icons.MdPlayCircleOutline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SKIP_NEXT: return <Icons.MdSkipNext size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SKIP_PREVIOUS: return <Icons.MdSkipPrevious size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PIE_CHART: return <Icons.MdPieChart size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PIE_CHART_OUTLINED: return <Icons.MdPieChartOutlined size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SHOW_CHART: return <Icons.MdShowChart size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_INSERT_CHART: return <Icons.MdInsertChart size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_EQUALIZER: return <Icons.MdEqualizer size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_WEB_ASSET: return <Icons.MdWebAsset size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_WEB: return <Icons.MdWeb size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_TABLET_MAC: return <Icons.MdTabletMac size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_LAPTOP_MAC: return <Icons.MdLaptopMac size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_DESKTOP_MAC: return <Icons.MdDesktopMac size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PHONE_IPHONE: return <Icons.MdPhoneIphone size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SEARCH: return <Icons.MdSearch size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_MESSAGES: return <Icons.MdChat size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_HELP: return <Icons.MdHelp size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} /> 
    case iconname.ICON_LOCK: return <Icons.MdLockOutline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_INFO: return <Icons.MdInfo size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_LOCK_OPEN: return <Icons.MdLockOpen size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CLOSE: return <Icons.MdClose size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CHECK: return <Icons.MdCheck size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CHECK_CIRCLE: return <Icons.MdCheckCircle size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CANCEL: return <Icons.MdCancel size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ADD_CIRCLE: return <Icons.MdAddCircle size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ADD_CIRCLE_OUTLINE: return <Icons.MdAddCircleOutline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_DELETE: return <Icons.MdDelete size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_DELETE_FOREVER: return <Icons.MdDeleteForever size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CONTENT_COPY: return <Icons.MdContentCopy size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_NOTIFICATIONS: return <Icons.MdNotifications size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_NOTIFICATIONS_ACTIVE: return <Icons.MdNotificationsActive size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_NOTIFICATIONS_NONE: return <Icons.MdNotificationsNone size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_NOTIFICATIONS_OFF: return <Icons.MdNotificationsOff size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_KEYBOARD_ARROW_DOWN: return <Icons.MdKeyboardArrowDown size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_KEYBOARD_ARROW_UP: return <Icons.MdKeyboardArrowUp size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_KEYBOARD_ARROW_LEFT: return <Icons.MdKeyboardArrowLeft size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_KEYBOARD_ARROW_RIGHT: return <Icons.MdKeyboardArrowRight size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_BUG_REPORT: return <Icons.MdBugReport size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_PHOTO_CAMERA: return <Icons.MdPhotoCamera size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SHORT_TEXT: return <Icons.MdShortText size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_EVENT: return <Icons.MdEvent size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_LIST: return <Icons.MdList size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_WORK: return <Icons.MdWork size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ACCESS_TIME: return <Icons.MdAccessTime size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_MIC: return <Icons.MdMic size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_VIDEOCAM: return <Icons.MdVideocam size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CALL: return <Icons.MdCall size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_MESSAGE: return <Icons.MdMessage size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_FILTER_LIST: return <Icons.MdFilterList size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_ATTACH_FILE: return <Icons.MdAttachFile size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_DIRECTIONS: return <Icons.MdDirections size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_MOOD: return <Icons.MdMood size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_CHECK_BOX: return <Icons.MdCheckBox size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_RADIO_BUTTON_CHECKED: return <Icons.MdRadioButtonChecked size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_GRID_ON: return <Icons.MdGridOn size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_LAYERS: return <Icons.MdLayers size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_REFRESH: return <Icons.MdRefresh size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SYNC: return <Icons.MdSync size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SYNC_DISABLED: return <Icons.MdSyncDisabled size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
    case iconname.ICON_SYNC_PROBLEM: return <Icons.MdSyncProblem size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />

    case '': return <Icons.MdInfo size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />

    default: return <Icons.MdInfo size={this.defaultProps.size} color={this.defaultProps.color} />
    }
}    
    render() {
        return (
            this.getSubComponent(this.props.icon, this.props.size)
        )        
    }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string, 
  active: PropTypes.string,
  style: PropTypes.shape({
    verticalAlign: PropTypes.string
  })
}

export default Icon


