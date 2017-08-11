import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeId } from 'framework/store/modules/tabs'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
import { Div } from 'app/styles'
const sceneProp = { id: 'forms' }
const tabProp = { id: 'formlist' }
class Forms extends Component {
    
	componentWillMount() {
		this.props.onMount()
	}
    
	render() {
		return (
			<Div>
				<TabsContainer id={tabProp.id}/>
				<br/>
				{React.cloneElement(this.props.children, tabProp)}
			</Div>
		)
	}
}

const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(changeId(sceneProp.id))
		}
	}
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Forms)

