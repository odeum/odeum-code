import React, { Component } from 'react'
import { changeInstance } from 'framework/store/modules/tabs'
import { connect } from 'react-redux'
import { getListAsync, getAppendixCfg } from 'app/store/modules/eplan'
const sceneProp = { id: 'eplan' }

class EplanAppendix extends Component {
	async componentWillMount() {
		var data = await this.props.getList()
		if (data) {
			this.props.onMount()
		}
	}

	render() {

		return (
			<div>
				{React.cloneElement(this.props.children, sceneProp)}
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(changeInstance(sceneProp.id))
			dispatch(getAppendixCfg())
		},
		getList: async () => {
			return await dispatch(await getListAsync())
		},
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(EplanAppendix)