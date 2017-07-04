import React from 'react'
import { TabClose, TabCloseLink, TabDiv, TabIcon, TabLabel, TabList, TabLink, TabIconDiv } from '../styles/TabStyles'
import { ICON_CLOSE } from 'assets/icons'
import Icon from 'assets/Icon'

const Tabs = ({instance, activeTab, onTabClick, OnCloseClick}) => {
  let active = (tab) => (tab.label === instance.activeTab ? true : false)
  function isFixed(tab) {
    if (tab.fixed === undefined) {
      return null
    }
    if (!tab.fixed) {
      return <TabCloseLink to="/">
               <TabClose on={ active(tab) } onClick={ (e) => {
                                                            e.preventDefault()
                                                            OnCloseClick(instance.id,tab)
                                                          } }>
                 <Icon icon={ ICON_CLOSE } on={ active(tab) } size={ 12 } />
               </TabClose>
             </TabCloseLink>
    }
  }
  return (
    <TabList>
      { instance.tabs.map((tab, index) => {
          return (
            <TabLabel key={ index } on={ active(tab) }>
              <div onClick={ (e) => {
                               e.preventDefault()
                               onTabClick(instance.id, tab.label)
                             } }>
                <TabLink to={ tab.location } className={ active(tab) }>
                  <TabDiv>
                    <TabIconDiv>
                      <TabIcon icon={ tab.icon } active={ active(tab) } /> </TabIconDiv>
                    { tab.label }
                  </TabDiv>
                </TabLink>
              </div>
              { isFixed(tab) }
            </TabLabel>
          )
        
        }) }
    </TabList>
  )
}

export default Tabs