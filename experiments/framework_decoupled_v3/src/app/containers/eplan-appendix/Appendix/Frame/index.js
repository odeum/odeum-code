//***	DEPRECATED ***//

// /* React */
// import React, { Component } from 'react'
// /* Redux */
// import { connect } from 'react-redux'

// /* Framework */
// import { addTab, tabChange } from 'framework/store/modules/tabs'
// /* Styling */

// /* Components */

// /* -------- END IMPORT ---------- */
// class FrameContainer extends Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = {}
// 	}
// 	componentWillMount() {
// 		this.props.onMount(
// 			this.props.appendixId,
// 			{
// 				id: this.props.frameId,
// 				label: this.props.frameId,
// 				icon: 'mode_edit',
// 				location: '/eplan/list/' + this.props.appendixId + '/frames/' + this.props.frameId + '/edit',
// 				fixed: false,
// 				closeLink: '/eplan/list/' + this.props.appendixId + '/frames'
// 			},
// 			this.props.frameId
// 		)
// 	}

// 	render() {
// 		let key = this.props.location.pathname
// 		return (
// 			<div>
// 				{React.cloneElement(this.props.children, { key: key, appendixId: this.props.appendixId, frameId: this.props.frameId, param: this.props.param })}
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = (state, ownProps) => ({
// 	appendixId: ownProps.params.id,
// 	frameId: ownProps.params.frameid,
// 	conf: state.eplan.conf
// })


// function mapDispatchToProps(dispatch) {
// 	return {
// 		onMount: (id, tab) => {
// 			console.log('-----id, tab-----')
// 			console.log(id, tab)
// 			dispatch(addTab(id, tab))
// 			dispatch(tabChange(id, tab.label))
// 		}
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FrameContainer)