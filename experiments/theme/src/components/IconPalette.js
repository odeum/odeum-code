import React, { Component } from 'react'

import { iconArr } from './icon_array'


class IconPalette extends Component {
	render() {
		return (
            <div>
                {iconArr.map((icon) => (
                    <div key={icon.name}>
						{icon.name} {icon.value} {icon.component()}
                    </div>
                ))}
            </div>
		)
	}
}

export default IconPalette
