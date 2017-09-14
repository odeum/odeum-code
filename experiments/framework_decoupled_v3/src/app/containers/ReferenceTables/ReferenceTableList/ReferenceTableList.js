import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { getReferenceTableListAsync } from 'app/store/modules/eplan'
import { getReferenceTableSelectValues, getReferences } from 'app/store/selectors/eplan'

import { /* DescriptionDiv, */ AppendixButtonPanel } from 'app/styles/EplanStyles'
import { PrimaryContainer } from 'app/styles/'
import ReferenceTable from './Table/Table'

import ReferenceTableSettingsModal from '../ReferenceTableSettingsModal'

/* Framework */
import { tabChange, tabIsLoading } from 'framework/store/modules/tabs'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

const props = { name: 'Oversigt' }

class ReferenceTableList extends Component {
	tab = {
		id: 'ref_oversigt',
		label: 'Oversigt',
		location: '/reference/list',
		icon: 'grid_on',
		fixed: true,
		isLoading: true,
		closeLocation: ''
	}
	constructor(props) {
		super(props)
		this.state = {
			settingsModalIsOpen: false,
		}

		this.openSettingsModal = this.openSettingsModal.bind(this)
		this.closeSettingsModal = this.closeSettingsModal.bind(this)
		this.saveSettingsModal = this.saveSettingsModal.bind(this)
		// this.handleSetting = this.handleSetting.bind(this)
		this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this)

		this.onClickButton = this.onClickButton.bind(this)
	}

	async componentWillMount() {

		console.log(this.props.referencetablesIsLoading)
		this.props.onMount(this.props.id, props.name)
		/* 	if (this.props.referencetablesIsLoading === true) {
			} */
		console.log(this.props.id)
		this.props.tabisLoading(this.props.id, this.tab, true)
		if (!this.props.referencetables) {
			await this.props.getList()
			this.props.tabisLoading(this.props.id, this.tab, false)
			// console.log(this.props.referencetablesIsLoading)
		}
	}

	componentWillUpdate(nextProps, nextState) {
		// console.log('')
		// console.log(nextProps.referencetablesIsLoading)
		//  		if (nextProps.referencetablesIsLoading !== undefined) {
		// 			if (nextProps.referencetablesIsLoading !== true && nextProps.referencetables !== null)
		// 				this.props.tabisLoading(this.props.id, this.tab, false)
		// 		} 
	}

	componentDidUpdate(prevProps, prevState) {
		/* 	if (prevProps.referencetables !== null)
				this.props.tabisLoading(this.props.id, this.tab, false) */
	}


	openSettingsModal() {
		this.setState({
			settingsModalIsOpen: true,
			settingData: this.props.referenceTableEntry
		})
	}
	closeSettingsModal() {
		this.setState({
			settingsModalIsOpen: false
		})
	}
	saveSettingsModal() {
		this.setState({
			settingsModalIsOpen: false
		})
	}
	handleSettingsSubmit(values) {
		// console.log('gem')
		// this.props.updateReferenceTable(values, this.props.referenceTableId)
	}
	onClickButton(index) {
		this.props.onClickButton(index)
	}

	render() {
		return (
			<PrimaryContainer>
				{/* <DescriptionDiv>Small description placeholder</DescriptionDiv> */}
				<AppendixButtonPanel>
					<Button icon={iconname.ICON_ADD_CIRCLE} onClick={this.openSettingsModal} size={18}>Opret ny reference tabel</Button>
				</AppendixButtonPanel>
				{this.props.referencetablesIsLoading ? null : <ReferenceTable list={this.props.referencetables} settingsModalIsOpen={this.state.settingsModalIsOpen} onClickButton={this.onClickButton} />}
				<ReferenceTableSettingsModal
					settingsModalIsOpen={this.state.settingsModalIsOpen}
					closeSettingsModal={this.closeSettingsModal}
					saveSettingsModal={this.saveSettingsModal}
					referenceTableSelectValues={this.props.referenceTableSelectValues}
				//settingData={ this.state.settingData }
				//handleSetting={this.handleSetting}
				//referenceTableId={this.props.referenceTableId}
				//referenceTable={this.props.referenceTable}
				//referenceTableForm={this.settingsForm}
				/>
			</PrimaryContainer>
		)
	}
}
const mapStateToProps = (state) => ({
	referencetables: getReferences(state),
	referencetablesIsLoading: state.eplan.referencetablesIsLoading,
	referenceTableSelectValues: getReferenceTableSelectValues(state),

})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, name) => {
			dispatch(tabChange(id, name))
		},
		tabisLoading: (instanceID, tab, isLoading) => {
			dispatch(tabIsLoading(instanceID, tab, isLoading))
		},
		onClickButton: (location) => {
			dispatch(push('/reference/list/' + location + '/edit'))
		},
		getList: async () => {
			dispatch(await getReferenceTableListAsync())
		}

	}

}
export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableList)