import React from 'react'
import { TabClose, TabCloseLink, TabDiv, TabIcon, TabLabel, TabList, TabLink, TabIconDiv } from '../styles/TabStyles'
import { ICON_CLOSE } from 'framework/assets/icons'
import Icon from 'framework/assets/Icon'

const Tabs = ({ tabs, id, activeTab, onTabClick, OnCloseClick }) => {
	let active = (tab) => (tab.label === activeTab ? true : false)
	function isFixed(tab) {
		if (tab.fixed === undefined) {
			return null
		}
		if (!tab.fixed) {
			return <TabCloseLink to="/">
				<TabClose on={ active(tab) } onClick={ (e) => {
					e.preventDefault()
					OnCloseClick(id, tab)
				} }>
					<Icon icon={ ICON_CLOSE } on={ active(tab) } size={ 13 } />
				</TabClose>
			</TabCloseLink>
		}
	}
	return (
		<TabList>
			{ tabs.map((tab, index) => {
				return (
					<TabLabel key={ index } on={ active(tab) }>
						<div onClick={ (e) => {
							e.preventDefault()
							onTabClick(id, tab.label)
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