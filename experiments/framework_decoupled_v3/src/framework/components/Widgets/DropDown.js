import React, { Component } from 'react'
import * as Icons from 'react-icons/lib/md'

class Dropdown extends Component {
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
			<div className={this.props.className}>
				<div style={{ display: 'flex' }} className="label" onClick={this.handleDropDown}>
					<div>{this.props.label}</div>&nbsp;
					<div className="arrow-zone">
						{this.state.listVisible ? <span className={'arrow'}><Icons.MdKeyboardArrowUp/></span> : <span className={'arrow'}><Icons.MdKeyboardArrowDown/></span>}
					</div>
				</div>
				<div className={'container'}>
					{this.state.listVisible ?
						<div>{this.props.children}</div> :
						null}
				</div>
			</div>
		)
	}
}

export default Dropdown