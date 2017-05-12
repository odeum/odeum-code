import React from 'react'
import * as Icons from 'react-icons/lib/md'
// import { MdSettings } from 'react-icons/lib/md'
import * as IconNames from './icons'
import * as colors from './colors'

// const availableicons = {
//   settings: Icons.MdSettings,
//   fields: Icons.MdCode
// }

// const Components = {
//     photo: Icons.MdSettings,
//     video: Icons.MdCode
// }

export function IconDisplay() {
    const type = 'Icons.Md'
    var MyComponent = type + IconNames.ICON_SETTINGS
    // eslint-disable-next-line      
    console.log(MyComponent)
    return <MyComponent /> 
    // <Icons.MdSettings /> 
}

// var MyComponent = type + IconNames.ICON_SETTINGS

class ShowIcon extends React.Component {
    
    getSubComponent(name) {

    switch (name) {
      case IconNames.ICON_SETTINGS: return <Icons.MdSettings color={colors.ICON_DEFAULT_COLOR} />
      case IconNames.ICON_MENU: return <Icons.MdMenu color={colors.ICON_DEFAULT_COLOR} />
      case IconNames.ICON_DASHBOARD: return <Icons.MdDashboard color={colors.ICON_DEFAULT_COLOR} />
      case IconNames.ICON_SEARCH: return <Icons.MdSearch color={colors.ICON_DEFAULT_COLOR} />
      case IconNames.ICON_MESSAGES: return <Icons.MdChat color={colors.ICON_DEFAULT_COLOR} />
    //   case IconNames.ICON_SETTINGS: return <Icons.MdCode color={ICON_DEFAULT} />
    //   case IconNames.ICON_SETTINGS: return <Icons.MdInfo color={ICON_DEFAULT} />
      default: return <Icons.MdInfo color={colors.ICON_DEFAULT_COLOR} />
    }
  }    
    render() {
        return (
        <div> 
            {/*{this.getSubComponent(IconNames.ICON_SETTINGS)}
            {this.getSubComponent('menu')}
            {this.getSubComponent(IconNames.ICON_DASHBOARD)}*/}
            {this.getSubComponent(this.props.icon)}        
        </div>
        )        
    }
}

export default ShowIcon

// <Icons.MdSettings color={color(active)}/>
//   const SpecificIcon = availableicons[props.iconType]
//   return <SpecificIcon icon={props.icon} />



