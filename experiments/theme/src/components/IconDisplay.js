import React from 'react'
// import * as Icons from 'react-icons/lib/md'
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

var type = 'Icons.Md'

export function IconDisplay() {
    var MyComponent = type + IconNames.ICON_SETTINGS
    // eslint-disable-next-line      
    console.log(MyComponent)
    return <MyComponent /> 
    // <Icons.MdSettings /> 
}

var MyComponent = type + IconNames.ICON_SETTINGS

class Question extends React.Component {
    
    render() {
        return <MyComponent />
    }
}

export default Question

// <Icons.MdSettings color={color(active)}/>
//   const SpecificIcon = availableicons[props.iconType]
//   return <SpecificIcon icon={props.icon} />



