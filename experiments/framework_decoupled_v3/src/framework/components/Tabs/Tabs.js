import React from 'react'
import { TabCont, TabText, TabTextLoad, TabClose, TabIcon, TabCloseLink, TabDiv, TabLabel, TabList, TabLink, TabIconDiv, TabLoaderDiv } from './TabStyles'
import { ICON_CLOSE } from 'framework/assets/icons'
import Icon from 'framework/assets/Icon'
import SmoothLoader from 'framework/components/Widgets/SmoothLoader/SmoothLoader'

const Tabs = ({ tabs, instanceID, activeTab, onTabClick, OnCloseClick }) => {
	let active = (tab) => {
		return tab.label === activeTab ? true : false
	}
	return (
		<TabList>
			{Object.keys(tabs).map((tab, index) => {
				return (
					<Tab instance={instanceID} tab={tabs[tab]} key={index} active={active(tabs[tab])} onTabClick={onTabClick} onCloseClick={OnCloseClick} />
				)
			})}
		</TabList >
	)
}
const Tab = ({ instance, tab, active, onTabClick, onCloseClick }) => {
	let TabClick = () => {
		onTabClick(instance, tab.label)
	}
	let TabCloseFunc = () => {
		onCloseClick(instance, tab)
	}
	let isFixed = () => {
		if (tab.fixed === undefined) {
			return null
		}
		if (!tab.fixed) {
			return <TabCloseLink to={tab.closeLink}>
				<TabClose active={active} onClick={TabCloseFunc}>
					<Icon icon={ICON_CLOSE} active={active} size={15} />
				</TabClose>
			</TabCloseLink>
		}
		if (tab.fixed === true) { return null }
	}
	return (
		<TabLabel active={active}>
			<TabLink to={tab.location} className={active}>
				<TabCont>
					<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}
						onClick={TabClick}>
						<TabDiv>
							{!tab.isLoading ?
								<TabIconDiv><TabIcon icon={tab.icon} active={active} /> </TabIconDiv>
								: <TabLoaderDiv><SmoothLoader size='xxs' velocity='fast' color='#EEEDED' /> </TabLoaderDiv>}
							{tab.label === '' ? null : tab.fixed ? <TabText title={tab.label}>{tab.label}</TabText> : <TabTextLoad title={tab.label}>{tab.label}</TabTextLoad>}
						</TabDiv>
					</div>
				</TabCont>
			</TabLink>
			{isFixed()}
		</TabLabel>


	)
}
export default Tabs