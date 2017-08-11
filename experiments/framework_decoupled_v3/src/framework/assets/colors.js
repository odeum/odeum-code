// HELPER FUNCTIONS

import _ from 'lodash'

export function getColor(colorName) {
	var colorFinder = _.find(colorArr, function (color) {
		return color.name === colorName
	})
	return colorFinder.value
}

export function hexToRgbA(hex) {
	var c
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('')
		if (c.length === 3) {
			c= [c[0], c[0], c[1], c[1], c[2], c[2]]
		}
		c = '0x' + c.join('')
		return 'rgba(' + [(c>>16)&255, (c>>8)&255, c&255].join(', ') + ', 1)'
	}
	throw new Error('Invalid Hex value')
}


// DEFAULT COLORS
export const HEADER = '#2C3E50'

export const MENUBAR = '#3B97D3'

export const FOOTER = '#F7F7F7'

export const WORKSPACE = '#ECF0F1'

// SECONDARY COLORS
export const MENUBAR_SELECTED = '#81C1EA' 

export const TAB = '#E3E5E5'
export const TAB_HOVER = '#81C1EA'
export const TAB_SELECTED = '#3B97D3'
export const TAB_TEXT ='#5E5E5E'
export const TAB_TEXT_SELECTED = '#FFFFFF'

// SEARCH COLORS
export const SEARCHBAR = '#34495D'

// BUTTON COLORS
export const BUTTON_TEXT = '#FFFFFF'
export const BUTTON_DEFAULT = '#3B97D3'
export const BUTTON_DEFAULT_HOVER = '#81C1EA'
export const BUTTON_DEFAULT_FOCUS = '#81C1EA'

export const BUTTON_ALT = '#13A085'
export const BUTTON_ALT_HOVER = '#25B89A'
export const BUTTON_ALT_FOCUS = '#25B89A'

//TODO: BUTTON_SUCCESS, BUTTON_WARNING, BUTTON_DANGER

// ICON COLORS
export const ICON_ACTIVE_COLOR = '#FFFFFF'
export const ICON_DEFAULT_COLOR = '#34495D'

// ODEUM REPORT APP SPECIFIC (WORKFLOW) TAB COLORS
export const TAB_COLOR_1 = '#81C1EA'
export const TAB_COLOR_2 = '#3B97D3'
export const TAB_COLOR_3 = '#25B89A'
export const TAB_COLOR_4 = '#2AC639'
export const TAB_COLOR_5 = '#F39C12'
export const TAB_COLOR_6 = '#D4CD11'
export const TAB_COLOR_7 = '#E74C3C'
export const TAB_COLOR_8 = '#CE1D1D'
export const TAB_COLOR_9 = '#979898'
export const TAB_COLOR_10 = '#5E5E5E'

// ODEUM REPORT APP SPECIFIC COMPONENT COLORS
export const GAUGE = '#25B89A'
export const GAUGE_BACKGROUND = '#D5D5D5'
export const HEART = '#D42027'
export const CARD_HEADER = '#2C3E50'
export const CARD_FOOTER = '#EEEDED'
export const LIST_HEADER = '#2C3E50'

// ODEUM COLORSCHEME (OLD NAMING CONVENTION)
export const PRIMARY_BLUE = '#3B97D3'
export const ACCENT_BLUE = '#2280C3'
export const ASPHALT_LIGHT = '#34495D'
export const ASPHALT_DARK = '#2C3E50'
export const EMERALD_LIGHT = '#25B89A'
export const EMERALD_DARK = '#13A085'
export const CLOUDY_LIGHT = '#ECF0F0'
export const CLOUDY_DARK = '#BDC2C6'
export const DREAMY_BLUE = '#81C1EA'

export const COMP_BLUE = '#006CB2'
export const COMP_ORANGE = '#FF9600'
export const COMP_YELLOW = '#F8BB31'
export const COMP_ORANGE_2 = '#E98832'

export const REDUX_PURPLE = '#764EB9'
export const REACTIVEX_PINK = '#EA228F'
export const REACTIVEX_PURPLE = '#513085'
export const REACT_CYAN = '#58C1DC'
export const GRAPHQL_PINK = '#E33CAA'
export const BLACK = '#000'

export const MODAL_HEADER = PRIMARY_BLUE
export const MODAL_HEADER_ICON = '#fff'
export const MODAL_HEADER_TITLE = '#fff'

// https://color.adobe.com/

export const colorArr = [
	{
		name: 'HEADER',
		value: '#2C3E50'
	},
	{
		name: 'MENUBAR',
		value: '#3B97D3'
	},
	{
		name: 'FOOTER',
		value: '#F7F7F7'
	},
	{
		name: 'WORKSPACE',
		value: '#ECF0F1'
	},
	{
		name: 'MENUBAR_SELECTED',
		value: '#81C1EA'
	},
	{
		name: 'TAB',
		value: '#E3E5E5'
	},
	{
		name: 'TAB_HOVER',
		value: '#81C1EA'
	},
	{
		name: 'TAB_SELECTED',
		value: '#3B97D3'
	},
	{
		name: 'TAB_TEXT',
		value: '#5E5E5E'
	},
	{
		name: 'TAB_TEXT_SELECTED',
		value: '#FFFFFF'
	},
	{
		name: 'SEARCHBAR',
		value: '#34495D'
	},
	{
		name: 'BUTTON_TEXT',
		value: '#FFFFFF'
	},
	{
		name: 'BUTTON_DEFAULT',
		value: '#3B97D3'
	},
	{
		name: 'BUTTON_DEFAULT_HOVER',
		value: '#81C1EA'
	},
	{
		name: 'BUTTON_DEFAULT_FOCUS',
		value: '#81C1EA'
	},
	{
		name: 'BUTTON_ALT',
		value: '#13A085'
	},
	{
		name: 'BUTTON_ALT_HOVER',
		value: '#25B89A'
	},
	{
		name: 'BUTTON_ALT_FOCUS',
		value: '#25B89A'
	},
	{
		name: 'ICON_ACTIVE_COLOR',
		value: '#FFFFFF'
	},
	{
		name: 'ICON_DEFAULT_COLOR',
		value: '#34495D'
	},
	{
		name: 'TAB_COLOR_1',
		value: '#81C1EA'
	},
	{
		name: 'TAB_COLOR_2',
		value: '#3B97D3'
	},
	{
		name: 'TAB_COLOR_3',
		value: '#25B89A'
	},
	{
		name: 'TAB_COLOR_4',
		value: '#2AC639'
	},
	{
		name: 'TAB_COLOR_5',
		value: '#F39C12'
	},
	{
		name: 'TAB_COLOR_6',
		value: '#D4CD11'
	},
	{
		name: 'TAB_COLOR_7',
		value: '#E74C3C'
	},
	{
		name: 'TAB_COLOR_8',
		value: '#CE1D1D'
	},
	{
		name: 'TAB_COLOR_9',
		value: '#979898'
	},
	{
		name: 'TAB_COLOR_10',
		value: '#5E5E5E'
	},
	{
		name: 'GAUGE',
		value: '#25B89A'
	},
	{
		name: 'GAUGE_BACKGROUND',
		value: '#D5D5D5'
	},
	{
		name: 'HEART',
		value: '#D42027'
	},
	{
		name: 'CARD_HEADER',
		value: '#2C3E50'
	},
	{
		name: 'CARD_FOOTER',
		value: '#EEEDED'
	},
	{
		name: 'LIST_HEADER',
		value: '#2C3E50'
	},
	{
		name: 'PRIMARY_BLUE',
		value: '#3B97D3'
	},
	{
		name: 'ACCENT_BLUE',
		value: '#2280C3'
	},
	{
		name: 'ASPHALT_LIGHT',
		value: '#34495D'
	},
	{
		name: 'ASPHALT_DARK',
		value: '#2C3E50'
	},
	{
		name: 'EMERALD_LIGHT',
		value: '#25B89A'
	},
	{
		name: 'EMERALD_DARK',
		value: '#13A085'
	},
	{
		name: 'CLOUDY_LIGHT',
		value: '#ECF0F0'
	},
	{
		name: 'CLOUDY_DARK',
		value: '#BDC2C6'
	},
	{
		name: 'DREAMY_BLUE',
		value: '#81C1EA'
	},
	{
		name: 'COMP_BLUE',
		value: '#006CB2'
	},
	{
		name: 'COMP_ORANGE',
		value: '#FF9600'
	},
	{
		name: 'COMP_YELLOW',
		value: '#F8BB31'
	},
	{
		name: 'COMP_ORANGE_2',
		value: '#E98832'
	},
	{
		name: 'REDUX_PURPLE',
		value: '#764EB9'
	},
	{
		name: 'REACTIVEX_PINK',
		value: '#EA228F'
	},
	{
		name: 'REACTIVEX_PURPLE',
		value: '#513085'
	},
	{
		name: 'REACT_CYAN',
		value: '#58C1DC'
	},
	{
		name: 'GRAPHQL_PINK',
		value: '#E33CAA'
	},
	{
		name: 'BLACK',
		value: '#000'
	},
]
