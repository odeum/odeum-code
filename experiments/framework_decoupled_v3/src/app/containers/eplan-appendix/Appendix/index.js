/* React */
import React, { Component } from 'react'
/* Redux */
import { connect } from 'react-redux'
import { getFrameConfigAsync } from 'app/store/modules/eplan'
import { getListAsync } from 'app/store/modules/eplan'
import { getAppendixMetaData } from 'app/store/selectors/appendix'
/* Framework */
import { addTab, tabChange, addInstance, tabIsLoading } from 'framework/store/modules/tabs'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
/* Styling */

/* Components */

/* -------- END IMPORT ---------- */
class AppendixContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
		this.tabs = this.tabs.bind(this)
	}
	tab = {
		id: this.props.param,
		label: '',
		location: "/eplan/list/" + this.props.param + "/edit",
		icon: "mode_edit",
		fixed: false,
		isLoading: false,
		closeLink: '/eplan/list'
	}

	async componentWillMount() {
		this.props.onMount(this.props.id, this.tab)
		this.props.tabisLoading(this.props.id, this.tab, true)
		this.tabs()
		if (this.props.appendixName === null)
			await this.props.getList()
		if (this.props.appendixName) { 
			this.tab.label = this.props.appendixName.name
			this.props.onMount(this.props.id, this.tab) }

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
		// console.log(this.props.param.toString())
		return (

			<div>
				{this.props.appendixName !== null ? <div>
					<TabsContainer instanceID={this.props.param.toString()} />
					{React.cloneElement(this.props.children, { param: this.props.param, key: key })}
				</div> : null}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	param: ownProps.params.id,
	// appendix: getAppendix(state, ownProps.params.id, ownProps) || null,
	// initialValues: {
	// 	fields: getAppendixSel(state, ownProps.params.id, ownProps)
	// } || null,
	appendixName: getAppendixMetaData(state, ownProps.params.id),
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
		},
		onMount: (id, tab) => {
			dispatch(addTab(id, tab))
			dispatch(tabChange(id, tab.label))
			dispatch(getFrameConfigAsync())
		},
		tabisLoading: (id, tab, isLoading) => {
			dispatch(tabIsLoading(id, tab, isLoading))
		},
		getList: async () => {
			return dispatch(await getListAsync())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppendixContainer)