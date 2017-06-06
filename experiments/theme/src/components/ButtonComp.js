import React from 'react'
import PropTypes from 'prop-types'

import * as Icons from 'react-icons/lib/md'
import * as iconname from './icons'
import { ICON_DEFAULT_COLOR } from './colors'


class Button extends React.Component {

constructor(props) {
    super(props)
    this.defaultProps = {
        name: 'info',
        size: 75,
        color: ICON_DEFAULT_COLOR,
        active: false,
        style: {
            verticalAlign: 'middle'
        }
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
    case iconname.ICON_MENU: {
        return <Icons.MdMenu 
            size={size || this.defaultProps.size} 
            color={this.setColor(this.props.active) || this.defaultProps.color} 
            style={this.defaultProps.style} />
    }
        
    default: return <Icons.MdInfo size={this.defaultProps.size} color={this.defaultProps.color} />
    }
}    
    render() {
        return (
            this.getSubComponent(this.props.icon, this.props.size)
        )        
    }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string, 
  active: PropTypes.bool,
  style: PropTypes.shape({
    verticalAlign: PropTypes.string
  })
}

export default Button


