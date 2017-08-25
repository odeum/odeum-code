import React, { Component } from 'react'

class DropDown extends Component {
	 constructor(props) {
		 super(props)
		 this.state = {
			 listVisible: false
		 }
		 this.handleDropDown = this.handleDropDown.bind(this)
	 }
	 handleDropDown() {
		 this.state.listVisible ? this.setState({ listVisible: false }) : this.setState({ listVisible: true })
	 }
	render() {
		return (
			<div onClick={this.handleDropDown}>
				{this.props.label}
				<div>
					{this.state.listVisible ?
						<div onClick={this.props.onClick}>{this.props.children}</div> :
						null}
				</div>
			</div>
		)
	}
}

export default DropDown