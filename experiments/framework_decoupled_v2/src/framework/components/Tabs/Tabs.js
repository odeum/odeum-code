import React from 'react';
import { CloseDiv, CloseLink, List, Label, Div, TabIcon, IconDiv, TabLink } from 'framework/components/Styles/TabStyles'
import {ICON_CLOSE} from 'assets/icons'

const Tabs = ({ tabs, activeTab, onTabClick, onCloseClick, id }) => {

    let active = (tab) => (tab.label === activeTab ? 'active' : '')
    const act = (tab) => (active(tab).includes('active') ? true : false)

    function isFixed(tab) {
        if (tab.fixed === undefined || false)
        { return null }
        if (!tab.fixed) {
            return <CloseLink to='/'>
                <CloseDiv
                    className={active(tab)}
                    onClick={(e) => { e.preventDefault(); onCloseClick(tab) }}>
                    <TabIcon icon={ICON_CLOSE} active={act(tab)} size={12} />
                </CloseDiv>
            </CloseLink>
        }

    }
    return (
        <List>
            {tabs.map((tab, index) => (
                <Label key={index} className={active(tab)}>
                    <div onClick={(e) => { e.preventDefault(); onTabClick(id, tab.label) }}>
                        <TabLink to={tab.location} className={active(tab)}>
                            <Div>
                                <IconDiv><TabIcon icon={tab.icon} active={act(tab)} /></IconDiv>
                                {tab.label}
                            </Div>
                        </TabLink>
                    </div>
                    {isFixed(tab)}
                </Label>
            ))}
        </List>
    )
}

export default Tabs;