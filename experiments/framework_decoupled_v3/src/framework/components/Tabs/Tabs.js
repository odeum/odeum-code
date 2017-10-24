import React from 'react'
import { TabCont, TabText, TabTextLoad, TabClose, TabCloseLink, TabDiv, TabLabel, TabList, TabLink, TabIconDiv, TabLoaderDiv } from './TabStyles'
import { ICON_CLOSE } from 'framework/assets/icons'
import Icon from 'framework/assets/Icon'
import SmoothLoader from 'framework/components/Widgets/SmoothLoader/SmoothLoader'

const Tabs = ({ tabs, instanceID, activeTab, onTabClick, OnCloseClick }) => {
	let active = (tab) => {
		return tab.label === activeTab ? true : false
	}
	/* 
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
		} */
	/* <TabLabel key={index} active={active(tabs[tab])}>
			<TabCont>
				<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}
					onClick={(e) => {
						e.preventDefault()
						onTabClick(instanceID, tabs[tab].label)
					}}>
					<TabLink to={tabs[tab].location} className={active(tabs[tab])}>
						<TabDiv>
							{!tabs[tab].isLoading ?
								<TabIconDiv><Icon icon={tabs[tab].icon} active={active(tabs[tab])} /> </TabIconDiv>
								: <TabLoaderDiv><SmoothLoader size='xxs' velocity='fast' color='#EEEDED' /> </TabLoaderDiv>}
							<TabText>{tabs[tab].label}</TabText>
						</TabDiv>
					</TabLink>
				</div>
				{isFixed(tabs[tab])}
			</TabCont>
		</TabLabel> */
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
			<TabCont>
				<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}
					onClick={TabClick}>
					<TabLink to={tab.location} className={active}>
						<TabDiv>
							{!tab.isLoading ?
								<TabIconDiv><Icon icon={tab.icon} active={active} /> </TabIconDiv>
								: <TabLoaderDiv><SmoothLoader size='xxs' velocity='fast' color='#EEEDED' /> </TabLoaderDiv>}
							{tab.label === '' ? null : tab.fixed ? <TabText>{tab.label}</TabText> : <TabTextLoad>{tab.label}</TabTextLoad>}
						</TabDiv>
					</TabLink>
				</div>
				{isFixed()}
			</TabCont>
		</TabLabel>
	)
}
export default Tabs