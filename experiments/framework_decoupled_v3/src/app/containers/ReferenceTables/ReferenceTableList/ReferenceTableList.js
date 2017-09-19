import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { getReferenceTableListAsync, setRefFilterText } from 'app/store/modules/eplan'
import { getReferenceTableSelectValues, /* getReferences, */ getFilteredRefs } from 'app/store/selectors/eplan'

import { /* DescriptionDiv, */ AppendixButtonPanel } from 'app/styles/EplanStyles'
import { PrimaryContainer } from 'app/styles/'
import ReferenceTable from './Table/Table'

import ReferenceTableSettingsModal from '../ReferenceTableSettingsModal'

/* Framework */
import { tabChange, tabIsLoading } from 'framework/store/modules/tabs'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import Input from 'framework/components/Widgets/Input/Input'

const props = { name: 'Oversigt' }

class ReferenceTableList extends Component {
	tab = {
		id: 'ref_oversigt',
		label: 'Oversigt',
		location: '/reference/list',
		icon: 'grid_on',
		fixed: true,
		isLoading: true,
		closeLink: ''
	}
	constructor(props) {
		super(props)
		this.state = {
			settingsModalIsOpen: false,
			tabIsLoading: true
		}

		this.openSettingsModal = this.openSettingsModal.bind(this)
		this.closeSettingsModal = this.closeSettingsModal.bind(this)
		this.saveSettingsModal = this.saveSettingsModal.bind(this)
		// this.handleSetting = this.handleSetting.bind(this)
		this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this)
		this.setFilter = this.setFilter.bind(this)
		this.onClickButton = this.onClickButton.bind(this)
	}

	async componentWillMount() {
		this.props.onMount(this.props.id, props.name)
		if (!this.props.referencetables) {
			this.props.tabisLoading(this.props.id, this.tab, true)
			await this.props.getList()
			this.props.tabisLoading(this.props.id, this.tab, false)
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextProps.referencetablesIsLoading === false && nextState.tabIsLoading === true) {
			this.setState({
				tabIsLoading: false
			})
			this.props.tabisLoading(this.props.id, this.tab, false)
		}
	}

	componentDidUpdate(prevProps, prevState) {
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
	setFilter(event) {
		this.props.setFilterText(event.target.value)
		console.log(this.props.referencetables)
	}
	render() {
		return (
			<PrimaryContainer>
				{/* <DescriptionDiv>Small description placeholder</DescriptionDiv> */}
				<AppendixButtonPanel>
					<Input value={this.props.FilterText} autoFocus placeholder={'Type here to filter list by name'} onChange={this.setFilter} />
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
		},
		setFilterText: (text) => {
			dispatch(setRefFilterText(text))
		}

	}

}
export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableList)