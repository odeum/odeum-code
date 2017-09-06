import React from 'react'
import { StyledLoader, TabClose, TabCloseLink, TabDiv, TabIcon, TabLabel, TabList, TabLink, TabIconDiv } from '../styles/TabStyles'
import { ICON_CLOSE } from 'framework/assets/icons'
import Icon from 'framework/assets/Icon'

const Tabs = ({ tabs, instanceID, activeTab, onTabClick, OnCloseClick }) => {
	let active = (tab) => {
		return tab.label === activeTab ? true : false
	}
	function isFixed(tab) {
		if (tab.fixed === undefined) {
			return null
		}
		if (!tab.fixed) {
			return <TabCloseLink to="/">
				<TabClose active={active(tab)} onClick={(e) => {
					e.preventDefault()
					OnCloseClick(instanceID, tab)
				}}>
					<Icon icon={ICON_CLOSE} active={active(tab)} size={13} />
				</TabClose>
			</TabCloseLink>
		}
	}
	return (
		<TabList>
			{Object.keys(tabs).map((tab, index) => {
				return (
					<TabLabel key={index} active={active(tabs[tab])}>
						<div onClick={(e) => {
							e.preventDefault()
							onTabClick(instanceID, tabs[tab].label)
						}}>
							<TabLink to={tabs[tab].location} className={active(tabs[tab])}>
								<TabDiv>
									{!tabs[tab].isLoading ?
										<TabIconDiv>
											<TabIcon icon={tabs[tab].icon} active={active(tabs[tab])} /> </TabIconDiv>
										: <TabIconDiv><StyledLoader size='xxs' velocity='fast' /> </TabIconDiv>}
									{tabs[tab].label}
								</TabDiv>
							</TabLink>
						</div>
						{isFixed(tabs[tab])}
					</TabLabel>
				)
			})}
		</TabList>
	)
}

export default Tabs