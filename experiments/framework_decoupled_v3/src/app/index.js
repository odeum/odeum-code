import React, { Component } from 'react'
import { Div } from 'app/styles/index'

class index extends Component {
	render() {
		return (
			<Div>
				{this.props.children}
			</Div>
		)
	}
}

export default index