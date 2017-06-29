import React from 'react'

import { ICON_CLOSE } from 'assets/icons'
import Icon from 'assets/Icon'
import { TabList, TabLabel, TabLink, TabDiv, TabIcon, TabIconDiv, TabCloseLink, TabClose } from 'components/styles/TabStyles'

const Tabs = ({children, activeTab, closeTab, updateTab, setActive}) => {
    let active = (tab) => (tab.label === activeTab ? 'active' : '')
    const act = (tab) => {
        return active(tab).includes('active') ? true : false
    }
    function isFixed(tab) {
        if (tab.fixed === undefined) {
            return null
        }
        if (!tab.fixed) {
            return <TabCloseLink to="/">
                     <TabClose className={ active(tab) } onClick={ e => {e.preventDefault();closeTab(tab)}}>
                       <Icon icon={ ICON_CLOSE } active={ act(tab) } size={ 12 } />
                     </TabClose>
                   </TabCloseLink>
        }
    }

    return (
        <div>
          <TabList>
            { children.map((tab, index) => (
                  <TabLabel key={ index } className={ active(tab) }>
                    <div onClick={ (e) => {e.preventDefault(); setActive(tab)}}>
                      <TabLink to={ tab.location } className={ active(tab) }>
                        <TabDiv>
                          <TabIconDiv>
                            <TabIcon icon={ tab.icon } active={ act(tab) } />
                          </TabIconDiv>
                          { tab.label }
                        </TabDiv>
                      </TabLink>
                    </div>
                    { isFixed(tab) }
                  </TabLabel>
              )) }
          </TabList>
        </div>
    )
}

export default Tabs