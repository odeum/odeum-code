import React, { Component } from 'react'
import { connect } from 'react-redux'
import General from 'app/components/Dashboard/general'
import { tabChange } from 'framework/store/modules/tabs'
class generalContainer extends Component {
    
	componentWillMount() {
		this.props.onMount()
	}
    
	render() {
		return (
			<div>
				<General/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(tabChange('dashboard', 'General'))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(generalContainer)