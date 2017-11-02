import React, { Component } from 'react'
import { changeInstance } from 'framework/store/modules/tabs'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const sceneProp = { id: 'eplan' }

class EplanAppendix extends Component {
	async componentWillMount() {
		this.props.onMount()
	}
	componentDidMount = () => this.props.location.pathname === '/eplan' ? this.props.onIncompletePath() : null

	render() {
		return (
			<div>
				{this.props.children !== null ? React.cloneElement(this.props.children, sceneProp) : null}
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
		onIncompletePath: () => {
			dispatch(push('/eplan/list'))
		}
	}

}
export default connect(mapStateToProps, mapDispatchToProps)(EplanAppendix)