import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { getReferenceTableListAsync } from 'app/store/modules/eplan'

import { DescriptionDiv, PulseLoader, AppendixButtonPanel } from 'app/styles/EplanStyles'
import { PrimaryContainer } from 'app/styles/'
import ReferenceTable from './Table/Table'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'


const props = { name: 'Oversigt' }

class ReferenceTableList extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}

		this.onClickButton = this.onClickButton.bind(this)
	}

	async componentWillMount() {
		this.props.onMount(this.props.id, props.name)
		await this.props.getList()
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
					<Button icon={iconname.ICON_ADD_CIRCLE} size={18}>Opret ny reference tabel</Button>
				</AppendixButtonPanel>
				{this.props.referencetablesIsLoading ? <PulseLoader size="15px" color={'royalblue'} /> : <ReferenceTable list={this.props.referencetables} onClickButton={this.onClickButton} />}
			</PrimaryContainer>
		)
	}
}
const mapStateToProps = (state) => ({
	referencetables: state.eplan.referencetables,
	referencetablesIsLoading: state.eplan.referencetablesIsLoading
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