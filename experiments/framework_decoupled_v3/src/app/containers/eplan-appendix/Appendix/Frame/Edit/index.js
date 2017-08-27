import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'

/* Framework */
import { tabChange } from 'framework/store/modules/tabs'

/* Styling */
import { PrimaryContainer } from 'app/styles'
import { /* DescriptionDiv, */ /* PulseLoader, */ AppendixButtonPanel } from 'app/styles/EplanStyles'

/* Components */
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'


class EditFrame extends Component {
	render() {
		console.log(this.props.frameId)
		return (
			<PrimaryContainer>
				{/* <DescriptionDiv>Small description placeholder</DescriptionDiv> */}
				<AppendixButtonPanel>
					<Button icon={iconname.ICON_CLOUD} size={18} >Exporter til plansystem</Button>
					{/* <Button icon={iconname.ICON_ADD_CIRCLE} size={18}>Knap 2</Button> */}
				</AppendixButtonPanel>
				{/* {this.props.referenceTable === null ? <PulseLoader size="15px" color={'royalblue'} /> : <ReferenceTableEditList list={List(_.map(this.props.referenceTable.data))} onClickButton={this.openEditModal} />} */}
				{/* <ReferenceTableSettingsModal
				settingsModalIsOpen={this.state.settingsModalIsOpen}
				closeSettingsModal={this.closeSettingsModal}
				saveSettingsModal={this.saveSettingsModal}
				referenceTableSelectValues={this.props.referenceTableSelectValues}
				referenceTableId={this.props.referenceTableId}
				 /> */}
				{/* <ReferenceTableEditModal
				editModalIsOpen={this.state.editModalIsOpen}
				editData={this.state.editData}
				closeEditModal={this.closeEditModal}
				saveEditModal={this.saveEditModal}
				referenceTableId={this.props.referenceTableId}
				 /> */}
			</PrimaryContainer>

		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	frameId: ownProps.frameId,
	// appendix: getAppendix(state, ownProps.param, ownProps) || null,
	// initialValues: {
	// fields: getAppendixSel(state, ownProps.param, ownProps)
	// } || null,
	conf: state.eplan.conf
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: (id, param) => {
			dispatch(tabChange(id, param))
		},
		// getAppendix: (param) => {
		// 	dispatch(getAppendixAsync(param))
		// },
		// updateApd: (appendix, id) => {
		// 	dispatch(updateAppendix(appendix, id))
		// },
		unMount: (param) => {
			//TODO Remove Open Appendix when *CLOSED* not when unmounted
			console.log(param)
			// dispatch(removeOpenApdx(param))
		},
		// publishToPlanSystem: async (id) => {
		// 	return dispatch(await exportAppendixToPlansystemAsync(id))
		// }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFrame)