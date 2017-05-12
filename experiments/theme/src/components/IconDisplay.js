import React from 'react'
import * as Icons from 'react-icons/lib/md'
// import { MdSettings } from 'react-icons/lib/md'
import * as IconNames from './icons'

// const availableicons = {
//   settings: Icons.MdSettings,
//   fields: Icons.MdCode
// }

// const Components = {
//     photo: Icons.MdSettings,
//     video: Icons.MdCode
// }

// const ICON_ACTIVE = '#FFFFFF'
const ICON_DEFAULT = '#34495D'

var type = 'Icons.Md'

export function IconDisplay() {
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
      case IconNames.ICON_SETTINGS: return <Icons.MdSettings color={ICON_DEFAULT} />
      case IconNames.ICON_MENU: return <Icons.MdMenu color={ICON_DEFAULT} />
      case IconNames.ICON_DASHBOARD: return <Icons.MdDashboard color={ICON_DEFAULT} />
    //   case IconNames.ICON_SETTINGS: return <Icons.MdCode color={ICON_DEFAULT} />
    //   case IconNames.ICON_SETTINGS: return <Icons.MdInfo color={ICON_DEFAULT} />
      default: return <Icons.MdInfo color={ICON_DEFAULT} />
    }
  }    
    render() {
        return (
        <div>
            <h3>Lets go for a beer</h3>    
            {this.getSubComponent(IconNames.ICON_SETTINGS)}
            {this.getSubComponent('menu')}
            {this.getSubComponent(IconNames.ICON_DASHBOARD)}
            {this.getSubComponent(this.props.icon)}
            
            {/*<MyComponent color={ICON_DEFAULT} />
            {/*<Icons.MdSettings color={ICON_DEFAULT} />*/}

        </div>
        )        
    }
}

export default ShowIcon

// <Icons.MdSettings color={color(active)}/>
//   const SpecificIcon = availableicons[props.iconType]
//   return <SpecificIcon icon={props.icon} />



