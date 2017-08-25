import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { getReferenceTableListAsync } from 'app/store/modules/eplan'
import { getReferenceTableSelectValues } from 'app/store/selectors/eplan'
import { List } from 'immutable'

import { DescriptionDiv, PulseLoader, AppendixButtonPanel } from 'app/styles/EplanStyles'
import { PrimaryContainer } from 'app/styles/'
import ReferenceTable from './Table/Table'

import ReferenceTableSettingsModal from '../ReferenceTableSettingsModal'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

var _ = require('lodash')

const props = { name: 'Oversigt' }

class ReferenceTableList extends Component {
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
		this.props.onMount(this.props.id, props.name)
		if (!this.props.referencetables) {
			await this.props.getList()
		}
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
		console.log('onClickButton: ' + index)
		this.props.onClickButton(index)
	}

	render() {
		return (
			<PrimaryContainer>
				<DescriptionDiv>Small description placeholder</DescriptionDiv>
				<AppendixButtonPanel>
					<Button icon={iconname.ICON_ADD_CIRCLE} onClick={this.openSettingsModal} size={18}>Opret ny reference tabel</Button>
				</AppendixButtonPanel>
				{this.props.referencetablesIsLoading ? <PulseLoader size="15px" color={'royalblue'} /> : <ReferenceTable list={List(_.map(this.props.referencetables))} onClickButton={this.onClickButton} />}
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
	referencetables: state.eplan.referenceTables,
	referencetablesIsLoading: state.eplan.referencetablesIsLoading,
	referenceTableSelectValues: getReferenceTableSelectValues(state),

})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, name) => {
			dispatch(tabChange(id, name))
		},
		onClickButton: (location) => {
			dispatch(push('/reference/list/' + location + '/edit'))
		},
		getList: () => {
			dispatch(getReferenceTableListAsync())
		}

	}

}
export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableList)