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
        color: colors.TAB_COLOR_5,
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
      case iconnames.ICON_DASHBOARD: return <Icons.MdDashboard size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
      case iconnames.ICON_SEARCH: return <Icons.MdSearch size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
      case iconnames.ICON_MESSAGES: return <Icons.MdChat size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
      case iconnames.ICON_LOCK: return <Icons.MdLockOutline size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
      case iconnames.ICON_INFO: return <Icons.MdInfo size={size || this.defaultProps.size} color={this.setColor(this.props.active) || this.defaultProps.color} />
      
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


