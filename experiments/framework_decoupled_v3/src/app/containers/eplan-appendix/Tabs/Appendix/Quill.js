import React, { Component } from 'react'
import ReactQuill from 'react-quill'
export default class Quill extends Component {

    render() {
        console.log(this.props)
        return (
            <div style={{width:'100%'}}>

                <ReactQuill value={this.props.value} 
                            onChange={this.props.onChange}
                            modules={Quill.modules}/>
            </div>
        )
    }
}
Quill.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ]
}