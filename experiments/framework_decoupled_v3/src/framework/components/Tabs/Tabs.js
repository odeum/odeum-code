import React from 'react'
import { TabClose, TabCloseLink, TabDiv, TabLabel, TabList, TabLink, TabIconDiv, TabLoaderDiv } from '../styles/TabStyles'
import { ICON_CLOSE } from 'framework/assets/icons'
import Icon from 'framework/assets/Icon'
import Loader from 'framework/components/Widgets/Loader/Loader'

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
										<TabIconDiv><Icon icon={tabs[tab].icon} active={active(tabs[tab])} /> </TabIconDiv>
										: <TabLoaderDiv><Loader size='xxs' velocity='fast' /> </TabLoaderDiv>}
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