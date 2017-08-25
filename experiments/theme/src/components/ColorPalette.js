import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import { colorArr, hexToRgbA } from './colors'
import { DisplayColor, CopyButton } from './ColorPaletteStyles'


class ColorPalette extends Component {
	render() {
		return (
			<div>
				{colorArr.map((color) => (
					<div key={color.name}>                        
						<DisplayColor color={color.value}>                            
							<CopyToClipboard text={color.name}><CopyButton color={color.value}>{color.name}</CopyButton></CopyToClipboard> <p/>
							<CopyToClipboard text={color.value}><CopyButton color={color.value}>{color.value}</CopyButton></CopyToClipboard> <p/>
							<CopyToClipboard text={hexToRgbA(color.value)}><CopyButton color={color.value}>{hexToRgbA(color.value)}</CopyButton></CopyToClipboard>
						</DisplayColor>
					</div>
				))}
			</div>
		)
	}
}

export default ColorPalette

// https://github.com/nkbt/react-copy-to-clipboard

