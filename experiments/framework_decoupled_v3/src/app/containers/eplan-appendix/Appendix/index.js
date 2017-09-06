/* React */
import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { getAppendixSel, getAppendix } from 'app/store/selectors/eplan'
import { getFrameConfigAsync } from 'app/store/modules/eplan'

/* Framework */
import { addTab, tabChange, addInstance } from 'framework/store/modules/tabs'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
/* Styling */

/* Components */

/* -------- END IMPORT ---------- */
class AppendixContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.tabs = this.tabs.bind(this)
	}
	componentWillMount() {
		this.props.onMount(
			this.props.id,
			{
				id: this.props.param,
				label: this.props.param,
				location: "/eplan/list/" + this.props.param + "/edit",
				icon: "mode_edit",
				fixed: false,
				isLoading: false,
				closeLink: '/eplan/list'
			},
			this.props.param
		)
		this.tabs()
	}

	tabs() {
		this.props.tabConfig(
			this.props.param,
			{
				tillaeg_tekst: {
					id: 'tillaeg_tekst',
					label: "Tillægs tekst",
					location: "/eplan/list/" + this.props.param + "/edit",
					icon: "info",
					fixed: true,
					isLoading: false,
					closeLink: ''
				},
				rammer: {
					id: 'rammer',
					label: "Rammer til tillæg",
					location: "/eplan/list/" + this.props.param + "/frames",
					icon: "info",
					fixed: true,
					isLoading: false,
					closeLink: ''
				}
			}
		)
	}

	render() {
		let key = this.props.location.pathname
		console.log(this.props.param.toString())
		return (
			<div>
				<TabsContainer instanceID={this.props.param.toString()} />

				{React.cloneElement(this.props.children, { param: this.props.param, key: key })}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	param: ownProps.params.id,
	appendix: getAppendix(state, ownProps.params.id, ownProps) || null,
	initialValues: {
		fields: getAppendixSel(state, ownProps.params.id, ownProps)
	} || null,
	conf: state.eplan.conf
})

function mapDispatchToProps(dispatch) {
	return {
		tabConfig: (id, tabs) => {
			dispatch(addInstance({
				sceneID: id,
				icon: 'mode_edit',
				name: id,
				location: "/eplan/list/" + id + "/edit",
				activeTab: tabs['tillaeg_tekst'].label,
				isScene: false,
				tabs: tabs
			}))
			// dispatch(tabChange(id, tabs[0].label))
		},
		onMount: (id, tab) => {
			dispatch(addTab('eplan', tab))
			dispatch(tabChange(id, tab.label))
			dispatch(getFrameConfigAsync())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppendixContainer)