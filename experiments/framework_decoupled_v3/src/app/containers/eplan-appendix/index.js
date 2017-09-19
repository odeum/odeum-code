import React, { Component } from 'react'
import { changeInstance } from 'framework/store/modules/tabs'
import { connect } from 'react-redux'
import { getListAsync } from 'app/store/modules/eplan'
const sceneProp = { id: 'eplan' }
// const tabProp = {id:'eplan-list'}


class EplanAppendix extends Component {
	async componentWillMount() {
		var d = await this.props.getList()
		console.log('d', d)
		if (d) {
			
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
		},
		getList: async () => {
			return await dispatch(await getListAsync())
		},
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(EplanAppendix)