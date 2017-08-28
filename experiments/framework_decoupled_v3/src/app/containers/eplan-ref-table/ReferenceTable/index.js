/* React */
import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { getAppendixSel, getAppendix } from 'app/store/selectors/eplan'

/* Framework */
import { addTab, tabChange, addInstance } from 'framework/store/modules/tabs'
// import TabsContainer from 'framework/containers/Tabs/TabsContainer'
/* Styling */

/* Components */

/* -------- END IMPORT ---------- */
class ReferenceTableContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	//	this.tabs = this.tabs.bind(this)
	}

	componentWillMount() {
		this.props.onMount(
			this.props.id,
			{ //Identifier for tab
				label: this.props.param,
				icon: 'mode_edit',
				location: '/reference/list/' + this.props.param + '/edit',
				fixed: false,
				closeLink: '/reference/list'
			},
			this.props.param
		)
		// this.tabs()
	}
	//UNUSED
	/* 	tabs() {
		this.props.tabConfig(
			this.props.param,
			[{
				label: "Tillægs tekst",
				location: "/eplan/list/" + this.props.param + "/edit",
				icon: "info",
				fixed: true
			},
			{
				label: "Rammer til tillæg",
				location: "/eplan/list/" + this.props.param + "/frames",
				icon: "info",
				fixed: true
			}
			]
		)
	}
     */
	render() {
		let key = this.props.location.pathname
		return (
			<div>
				{/* <TabsContainer id={this.props.param.toString()}/> */}
				{React.cloneElement(this.props.children, { key: key, param: this.props.param })}
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
			dispatch(addInstance(id))
			dispatch(addTab(id, tabs[0]))
			dispatch(addTab(id, tabs[1]))
			dispatch(tabChange(id, tabs[0].label))
		},
		onMount: (id, tab) => {
			dispatch(addTab(id, tab))
			dispatch(tabChange(id, tab.label))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferenceTableContainer)