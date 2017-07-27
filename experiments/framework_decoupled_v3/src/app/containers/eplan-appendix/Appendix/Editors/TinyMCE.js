import React, { Component } from 'react'
import TinyMCE from 'react-tinymce'
import {WHDiv} from 'app/styles'
export default class TinyMceEditor extends Component {
    render() {
        return (
            <WHDiv>
            <TinyMCE
            content={this.props.value}
            config={{
            
                plugins: 'autolink link image lists print preview',
                toolbar: 'styleselect | bold italic | alignleft aligncenter alignright | link ',
            }} 
            onBlur={this.props.onChange}
            />      
            </WHDiv>
        )
    }
}