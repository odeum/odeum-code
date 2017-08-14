import React, { Component } from 'react'
import TinyMCE from 'react-tinymce'
import { PrimaryContainer } from 'app/styles'

export default class TinyMceEditor extends Component {
	render() {
		return (
			<PrimaryContainer>
				<TinyMCE
					content={this.props.value}
					config={{
            
						plugins: 'autolink link image lists print preview',
						toolbar: 'styleselect | bold italic | alignleft aligncenter alignright | link ',
					}} 
					onBlur={this.props.onChange}
				/>      
			</PrimaryContainer>
		)
	}
}