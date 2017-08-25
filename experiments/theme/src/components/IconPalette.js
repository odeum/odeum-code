import React, { Component } from 'react'

import { iconArr } from './icon_array'
import * as Icons from 'react-icons/lib/md'

function Icon(props) {
	// Correct! JSX type can be a capitalized variable.
	const SpecificIcon = iconArr[0].component[props.iconType]
	return <SpecificIcon story={props.icon} />
}

class IconPalette extends Component {

	render() {
		let TagName = ''
		return (
			<div>
				{iconArr.map((icon) => {
					TagName = icon.tagname()
					console.log(TagName)
					console.log(Icons)
					return (
						<div key={icon.name}>
							{icon.name} {icon.value} {icon.tagname()}
							{/* <Icons.TagName /> */}
						</div>
					)
				})}
			</div>
		)
	}
}

export default IconPalette
