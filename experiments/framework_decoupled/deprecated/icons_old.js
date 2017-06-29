import * as Icons from 'react-icons/lib/md'
import React from 'react'

// Colors will be imported from the theme but tested here ... 
const ICON_ACTIVE = '#FFFFFF'
const ICON_DEFAULT = '#34495D'

function color(active) {
    if(active.includes('active'))
        {return(ICON_ACTIVE)}
    else
        {return(ICON_DEFAULT)}
}

export function renderIcons(icon, active) {
        switch (icon) {
            case 'configuration':
                return (
                   <Icons.MdSettings color={color(active)}/>
                )
            case 'design':
                return (
                   <Icons.MdOpacity color={color(active)}/>
                )
            case 'operations':
                return (

                   <Icons.MdInput color={color(active)}/>
                )
            case 'fields':
                return (
                       <Icons.MdCode color={color(active)}/>
                )
            case 'general':
                return (
                    <Icons.MdInfo color={color(active)}/>
                )
            case 'users':
            return(
                <Icons.MdPeople color={color(active)}/>
            )
            case 'workflow':
            return(
                <Icons.MdTimeline color={color(active)}/>
            )
            case 'add':
            return(
                <Icons.MdAdd color={color(active)}/>
                )
            case 'dashboard':
            return(
                <Icons.MdHome color={color(active)}/>
            )
            case 'organisation':
            return(
                <Icons.MdPerson color={color(active)}/>
            )
            case 'registrations':
            return(
                <Icons.MdStorage color={color(active)}/>
            )
            case 'tasks':
            return(
                <Icons.MdLayers color={color(active)}/>
            )
            case 'search':
            return(
                <Icons.MdSearch color={color(active)}/>
            )
            case 'notifications':
            return(
                <Icons.MdNotificationsNone color={color(active)}/>
            )
        
              default:
// eslint-disable-next-line              
            {console.log(icon)
                return (
                    <Icons.MdInfo color={color(active)}/>
                )}
        }
    }