import React, { Component } from 'react'
import Cake from 'app/components/Dashboard/cake'
import { connect } from 'react-redux'
import { tabChange } from 'framework/store/modules/tabs'
import { changeCake } from 'app/store/modules/cake'
class CakeContainer extends Component {
	componentWillMount = () => {
		this.props.onMount()
	}
	render() {
		return (
			<div>
				<Cake type={this.props.type} changeCake={this.props.changeCakeType}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	type: state.cake.type
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(tabChange('dashboard', 'Cake'))
		},
		changeCakeType: (text) => {
			dispatch(changeCake(text))
		}
	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)