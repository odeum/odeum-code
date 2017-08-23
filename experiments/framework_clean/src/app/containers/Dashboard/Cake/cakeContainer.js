import React, { Component } from 'react'
import Cake from 'app/components/Dashboard/cake'
import { connect } from 'react-redux'
import { tabChange } from 'framework/store/modules/tabs'
import { changeCake } from 'app/store/modules/cake'
/* import TabsContainer from 'framework/containers/Tabs/TabsContainer'
 */
const CakeArray = ['Cake', 'Muffin', 'Cookie']
class CakeContainer extends Component {
	componentWillMount = () => {
		this.props.onMount()
	}
	render() {
		return (
			<div>
				{/* <TabsContainer instanceID={'cakes'}/> */}
				<Cake type={this.props.type} changeCake={this.props.changeCakeType} CakeArray={CakeArray}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	type: state.cake.type,
	activeTab: state.tabs.activeScene
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