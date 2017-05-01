import * as Icons from 'react-icons/lib/md'
import React from 'react'
function color(active){
    if(active.includes('active'))
    {return('white')}
    else
    {return('#34495d')}
}
export function renderIcons(icon,active) {
        switch (icon) {
            case 'settings':
                return (
                   <Icons.MdSettings color={color(active)}/>
                )
            case 'design':
                return (
                   <Icons.MdOpacity color={color(active)}/>
                )
            case 'handlinger':
                return (

                   <Icons.MdInput color={color(active)}/>
                )
            case 'felter':
                return (
                       <Icons.MdCode color={color(active)}/>
                )
            case 'generelt':
                return (
                    <Icons.MdInfo color={color(active)}/>
                )
            case 'brugere':
            return(
                <Icons.MdPeople color={color(active)}/>
            )
            case 'arbejdsgang':
            return(
                <Icons.MdTimeline color={color(active)}/>
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
                return (null)
            // Add more icons here
        }
    };