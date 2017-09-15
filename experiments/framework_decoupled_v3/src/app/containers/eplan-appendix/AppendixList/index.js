import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { tabChange, tabIsLoading } from 'framework/store/modules/tabs'
import AppendixTable from './Table/Table'
import { /* DescriptionDiv */ /* PulseLoader ,*/ AppendixButtonPanel } from 'app/styles/EplanStyles'
import { getListAsync, setAppendixFilterText } from 'app/store/modules/eplan'
import { PrimaryContainer } from 'app/styles/'
import NewAppendixModal from './NewAppendixModal'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import Input from 'framework/components/Widgets/Input/Input'
// import { getFilteredAppdx } from 'app/store/selectors/eplan'
class AppendixList extends Component {
	tab = {
		id: 'eplan_oversigt',
		label: "Oversigt",
		location: "/eplan/list",
		icon: "assignment",
		fixed: true,
		isLoading: true,
		closeLocation: ''
	}
	constructor(props) {
		super(props)
		this.state = {
			newAppendixModalIsOpen: false
		}

		this.onClickButton = this.onClickButton.bind(this)
		this.openNewAppendixModal = this.openNewAppendixModal.bind(this)
		this.closeNewAppendixModal = this.closeNewAppendixModal.bind(this)
		this.saveNewAppendix = this.saveNewAppendix.bind(this)
		this.setFilter = this.setFilter.bind(this)
	}
	async componentWillMount() {
		this.props.onMount(this.props.id, this.tab)
		// if (this.props.appendixes.size < 1) {
		if (this.props.isLoading === true) {
			this.props.tabisLoading(this.props.id, this.tab, true)
		}
		await this.props.getList()


	}
	
	componentWillUpdate(nextProps, nextState) {
		if (this.props.isLoading !== true || nextProps.isLoading !== true)
			this.props.tabisLoading(this.props.id, this.tab, false)
	}
	onClickButton(index) {
		this.props.onClickButton(index)
	}
	openNewAppendixModal() {
		console.log('openNewAppendixModal')
		this.setState({
			newAppendixModalIsOpen: true
		})
	}
	closeNewAppendixModal() {
		this.setState({
			newAppendixModalIsOpen: false
		})
	}
	saveNewAppendix() {
		//TODO: Save changes
		// alert('do save')
		this.setState({
			newAppendixModalIsOpen: false
		})
	}
	setFilter(event) {
		this.props.setFilterText(event.target.value)
	}
	render() {
		const { newAppendixModalIsOpen } = this.state
		const { openNewAppendixModal, closeNewAppendixModal, saveNewAppendix } = this

		return (
			<PrimaryContainer>
				{/* <DescriptionDiv>Small description placeholder</DescriptionDiv> */}

				<AppendixButtonPanel>
					<Input autoFocus placeholder={'Type here to filter list by name'} onChange={this.setFilter} />
					<Button onClick={openNewAppendixModal} icon={iconname.ICON_ADD_CIRCLE} size={18}>Opret nyt tillæg</Button>
				</AppendixButtonPanel>
				{this.props.isLoading ? null : <AppendixTable onClickButton={this.onClickButton} />}
				<NewAppendixModal
					newAppendixModalIsOpen={newAppendixModalIsOpen}
					closeNewAppendixModal={closeNewAppendixModal}
					saveNewAppendix={saveNewAppendix}
				/>
			</PrimaryContainer>
		)
	}
}
const mapStateToProps = (state, ownProps) => ({
	isLoading: state.eplan.isLoading
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, tab) => {
			dispatch(tabChange(id, tab.label))
			dispatch(setAppendixFilterText(''))
		},
		onClickButton: (location) => {
			dispatch(push('/eplan/list/' + location + '/edit'))
		},
		getList: async () => {
			dispatch(await getListAsync())
		},
		tabisLoading: (instanceID, tab, isLoading) => {
			dispatch(tabIsLoading(instanceID, tab, isLoading))
		},
		setFilterText: (text) => {
			dispatch(setAppendixFilterText(text))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppendixList)