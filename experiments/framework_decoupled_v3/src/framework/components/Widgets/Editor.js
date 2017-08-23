import React, { Component } from 'react'
// import { ReactQuillStyled } from 'app/styles/EplanStyles'
import ImageBrowserModal from 'framework/components/Widgets/ImageBrowserModal'
import { getImagesList } from 'app/data/eplan' //getAppendixFramesList
// import { List } from 'immutable'
// import ReactQuill from 'react-quill'
import TinyMCE from 'react-tinymce'

class Editor extends Component {
	constructor(props) {
		super(props)

		this.state = {
			imageBrowserModalIsOpen: false,
			imagesList: null,
			fieldName: null,
			window: null
		}

		this.openMediaBrowser = this.openMediaBrowser.bind(this)
		this.closeImageBrowserModal = this.closeImageBrowserModal.bind(this)
		this.insertImage = this.insertImage.bind(this)

		// this.modules = {
		// 	toolbar: {
		// 		container: [
		// 			[{ 'header': '1' }, { 'header': '2' }],
		// 			[{ size: [] }],
		// 			['bold', 'italic', 'underline', 'strike', 'blockquote'],
		// 			[{ 'list': 'ordered' }, { 'list': 'bullet' },
		// 				{ 'indent': '-1' }, { 'indent': '+1' }],
		// 			['link', 'image', 'video'],
		// 			['clean']
		// 		],
		// 		handlers: {
		// 			"image": this.openImageBrowserModal,
		// 		}
		// 	}
		// }
	}

	async componentWillMount() {
		// this.setQuillStyle(this.props)

		let list = await getImagesList('/')
		// console.log(list)
		this.setState({ imagesList: list })
	}

	componentWillUpdate(nextProps) {
		// this.setQuillStyle(nextProps)
	}

	// setQuillStyle(props) {
	// 	this.quillStyle = {
	// 		display: (props.panellIsOpen) ? 'block' : 'none'
	// 	}
	// }

	openMediaBrowser(field_name, url, type, win) {
		if (type === 'image') {
			this.setState({ imageBrowserModalIsOpen: true })
		}

		this.setState({
			fieldName: field_name,
			window: win
		})
	}

	closeImageBrowserModal() {
		this.setState({
			imageBrowserModalIsOpen: false
		})
	}

	insertImage(imageUri) {
		this.state.window.document.getElementById(this.state.fieldName).value = imageUri
		// this.reactQuillRef.focus() //set focus in editor or else getSelection will not work
		// var range = this.reactQuillRef.getEditor().getSelection()
		// this.reactQuillRef.getEditor().insertEmbed(range.index, 'image', imageUri)
	}

	render() {
		return (
			<div>
				{/* <ReactQuill ref={(el) => { this.reactQuillRef = el }} value={this.props.value} onChange={this.props.onChange} modules={this.modules} style={this.quillStyle} /> */}
				<TinyMCE
					content={this.props.value}
					config={{
						plugins: 'autolink link image imagetools lists preview code',
						toolbar: 'styleselect | bold italic | alignleft aligncenter alignright | link | image | code ',
						imagetools_toolbar: 'editimage imageoptions',
						removed_menuitems: 'newdocument',
						file_browser_callback: this.openMediaBrowser
					}}
					onBlur={this.props.onChange}
				/>      

				{this.state.imagesList !== null ? <ImageBrowserModal
					imageBrowserModalIsOpen={this.state.imageBrowserModalIsOpen}
					closeImageBrowserModal={this.closeImageBrowserModal}
					list={this.state.imagesList}
					insertImage={this.insertImage} />
					: ""
				}
			</div>
		)
	}
}

export default Editor
