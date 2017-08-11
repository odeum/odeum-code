import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { tabChange } from 'framework/store/modules/tabs'
import AppendixTable from './Table/Table'
import { DescriptionDiv, PulseLoader, AppendixButtonPanel } from 'app/styles/EplanStyles'
import { getListAsync } from 'app/store/modules/eplan'
import { PrimaryContainer } from 'app/styles/'
import NewAppendixModal from 'app/components/eplan-appendix/Appendix/NewAppendixModal'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'

const props = { name: 'Oversigt' }

class AppendixList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newAppendixModalIsOpen: false
		}

		this.onClickButton = this.onClickButton.bind(this)
		this.openNewAppendixModal = this.openNewAppendixModal.bind(this)
		this.closeNewAppendixModal = this.closeNewAppendixModal.bind(this)
		this.saveNewAppendix = this.saveNewAppendix.bind(this)
	}
	async componentWillMount() {
		this.props.onMount(this.props.id, props.name)
		await this.props.getList()
       
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
		alert('do save')
		this.setState({
			newAppendixModalIsOpen: false
		})
	}
	render() {
		const { newAppendixModalIsOpen } = this.state
		const { openNewAppendixModal, closeNewAppendixModal, saveNewAppendix } = this

		return (
			<PrimaryContainer>
				<DescriptionDiv>Small description placeholder</DescriptionDiv> 
				<AppendixButtonPanel>
					<Button onClick={openNewAppendixModal} icon={iconname.ICON_ADD_CIRCLE} size={18}>Opret nyt tillæg</Button>
				</AppendixButtonPanel>
				{this.props.isLoading ? <PulseLoader size="15px" color={'royalblue'} /> : <AppendixTable list={this.props.appendixes} onClickButton={this.onClickButton} />}
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
	appendixes: state.eplan.appendixes,
	isLoading: state.eplan.isLoading
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, name) => {
			dispatch(tabChange(id, name))
		},
		onClickButton: (location) => {
			dispatch(push('/eplan/list/' + location + '/edit'))
		},
		getList: () => {
			dispatch(getListAsync())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppendixList)