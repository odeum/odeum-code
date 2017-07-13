import React, { Component } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import { colorArr } from './colors'
import { hexToRgbA } from '../helpers'
import { DisplayColor, CopyButton } from './ColorPaletteStyles'


class ColorPalette extends Component {
    render() {
        return (
            <div>
                {colorArr.map((color) => (
                    <div key={color.name}>                        
                        <DisplayColor color={color.value}>
                            {color.name} 
                            <p/> hex: {color.value} 
                            <p/> {hexToRgbA(color.value)} <p/>
                            <CopyToClipboard text={color.name}><CopyButton color={color.value}>c</CopyButton></CopyToClipboard></DisplayColor>
                    </div>
                ))}
            </div>
        )
    }
}

export default ColorPalette

