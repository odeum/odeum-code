import React, { Component } from 'react'
import MenuItem from 'framework/components/Menu/MenuItem'
import PropTypes from 'prop-types'
//Styles
import { MenuDiv } from 'framework/components/styles/MenuStyles'
//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeId } from 'framework/store/modules/tabs'

class MenuContainer extends Component {
	active(sceneName) {
		if (sceneName === this.props.active)
			return 'active'
		else
			return ''
	}
	render() {
		return (
			<MenuDiv>
				{this.props.scenes.map((scene, index) => (
					<MenuItem name={scene.name} icon={scene.icon} location={scene.location} active={this.active(scene.name)} key={index} onLoad={this.props.changeId} id={scene.sceneID}
					/>))}
			</MenuDiv>
		)
	}
}
MenuContainer.propTypes = {
	scenes: PropTypes.array.isRequired,
	active: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
	scenes: state.tabs.scenes,
	active: state.tabs.activeScene
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeId
	}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)