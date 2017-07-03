import React from 'react'
import {TabLabel, SubTabAnchor} from 'components/styles/TabStyles'
const Tab = (props) => {
    return (
        <TabLabel className={`${props.isActive ? 'active' : ''}`}>
            <SubTabAnchor className={`${props.isActive ? 'active' : ''}`}
                onClick={(event) => {
                    event.preventDefault()
                    props.onClick(props.tabIndex)
                }}>{props.name}
                <i className={`tab-icon ${props.iconClassName}`}/>
            </SubTabAnchor>
        </TabLabel>
    )
}
export default Tab