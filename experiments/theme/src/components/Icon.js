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
        size: 240,
        color: colors.ICON_DEFAULT_COLOR
    }
  }
    
    getSubComponent(name, size, color) {
    // All theme available icons must be in this switch
    switch (name) {
      case iconnames.ICON_SETTINGS: return <Icons.MdSettings size={size} color={color} />
      case iconnames.ICON_MENU: return <Icons.MdMenu size={size} color={color} />
      case iconnames.ICON_DASHBOARD: return <Icons.MdDashboard size={size} color={color} />
      case iconnames.ICON_SEARCH: return <Icons.MdSearch size={size} color={color} />
      case iconnames.ICON_MESSAGES: return <Icons.MdChat size={size} color={color} />
      case iconnames.ICON_LOCK: return <Icons.MdLockOutline size={size} color={color} />
      case iconnames.ICON_INFO: return <Icons.MdInfo size={size} color={color} />
      
      default: return <Icons.MdInfo size={this.defaultProps.size} color={this.defaultProps.color} />
    }
  }    
    render() {
        return (
        <div>
            {this.getSubComponent(this.props.icon, this.props.size, this.props.color)}        
        </div>
        )        
    }
}

export default Icon


