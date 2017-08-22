import React, { Component } from 'react'
import { PrimaryContainer } from 'app/styles/index'

class index extends Component {
	render() {
		return (
			<PrimaryContainer>
				{this.props.children}
			</PrimaryContainer>
		)
	}
}

export default index