import React, { Component } from 'react'
import MenuItem from 'framework/components/Menu/MenuItem'
import PropTypes from 'prop-types'
//Styles
import { MenuDiv } from 'framework/components/styles/MenuStyles'
//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeInstance } from 'framework/store/modules/tabs'
import { getMenuItems } from 'framework/store/selectors/menuSelector'
class MenuContainer extends Component {
	constructor(props) {
		super(props)
		this.active = this.active.bind(this)
	}
	active(sceneName) {
		if (sceneName === this.props.active)
			return 'active'
		else
			return ''
	}
	render() {
		const { scenes } = this.props
		return (
			<MenuDiv>
				{Object.keys(scenes).map((scene, index) => (
					<MenuItem name={scenes[scene].name}
						icon={scenes[scene].icon}
						location={scenes[scene].location}
						active={this.active(scenes[scene].sceneID)}
						key={index}
						onLoad={this.props.changeInstance}
						id={scenes[scene].sceneID}
					/>))}
			</MenuDiv>
		)
	}
}
MenuContainer.propTypes = {
	scenes: PropTypes.object.isRequired,
	active: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => ({
	scenes: getMenuItems(state, props),
	active: state.tabReducer.activeScene
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeInstance
	}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)