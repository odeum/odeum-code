import React from 'react'
import { TabCont, TabText, TabClose, TabCloseLink, TabDiv, TabLabel, TabList, TabLink, TabIconDiv, TabLoaderDiv } from './TabStyles'
import { ICON_CLOSE } from 'framework/assets/icons'
import Icon from 'framework/assets/Icon'
import SmoothLoader from 'framework/components/Widgets/SmoothLoader/SmoothLoader'

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
					<Icon icon={ICON_CLOSE} active={active(tab)} size={15} />
				</TabClose>
			</TabCloseLink>
		}
	}
	return (
		<TabList>
			{Object.keys(tabs).map((tab, index) => {
				return (
					<TabLabel key={index} active={active(tabs[tab])}>
						<TabCont
							onClick={(e) => {
								e.preventDefault()
								onTabClick(instanceID, tabs[tab].label)
							}}>
							<TabLink to={tabs[tab].location} className={active(tabs[tab])}>
								<TabDiv>
									{!tabs[tab].isLoading ?
										<TabIconDiv><Icon icon={tabs[tab].icon} active={active(tabs[tab])} /> </TabIconDiv>
										: <TabLoaderDiv><SmoothLoader size='xxs' velocity='fast' /> </TabLoaderDiv>}
									<TabText>{tabs[tab].label}</TabText>
								</TabDiv>
							</TabLink>
							{isFixed(tabs[tab])}
						</TabCont>
					</TabLabel>
				)
			})}
		</TabList>
	)
}

export default Tabs