import React, { Component } from 'react'

import { iconArr } from './icon_array'
import * as Icons from 'react-icons/lib/md'


class IconPalette extends Component {

	render() {
		let TagName = ''
		return (
			<div>
				{iconArr.map((icon) => {
					TagName = icon.component()
					console.log(TagName)
					console.log(Icons)
					return (
						<div key={icon.name}>
							{icon.name} {icon.value} {icon.component()}
							{/* <Icons.TagName /> */}
						</div>
					)
				})}
			</div>
		)
	}
}

export default IconPalette
