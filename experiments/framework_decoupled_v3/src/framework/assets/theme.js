import * as colors from './colors'
import * as fonts from './fonts'

const theme = {
	background: colors.EMERALD_LIGHT,
	color: colors.TAB_COLOR_2,

	font: fonts.PRIMARY,
	fontWeight: fonts.FONT_WEIGHT,
	fontStyle: fonts.FONT_STYLE,

	tabs: {
		TAB_TEXT: colors.TAB_TEXT,
		TAB_TEXT_SELECTED: colors.TAB_TEXT_SELECTED,
		TAB: colors.TAB,
		TAB_SELECTED: colors.TAB_SELECTED
	},
	button: {
		color: colors.BUTTON_TEXT,
		background: colors.BUTTON_DEFAULT,
	},

	iconStyle: {
		verticalAlign: '-5px', /* -10% */
		paddingRight: '8px'
	},

	iconButtonStyle: {
		//verticalAlign: '-4px', /* -10% */
		marginRight: '8px'
	},

	buttonSize: {
		large: {
			size: fonts.SIZE_LARGE,
			padding: '0 20px 0 15px', /*9px 20px 9px 15px; *//* top, right, buttom, left */
			lineHeight: 1.9
		},
		default: {
			size: fonts.SIZE_DEFAULT,
			padding: '0 20px 0 15px', /*9px 20px 9px 15px; *//* top, right, buttom, left */
			lineHeight: 1.9
		},
		small: {
			size: fonts.SIZE_SMALL,
			padding: '0 20px 0 15px', /*9px 20px 9px 15px; *//* top, right, buttom, left */
			lineHeight: 1.9
		},
		xsmall: {
			size: fonts.SIZE_EXTRA_SMALL,
			padding: '0 20px 0 15px', /*9px 20px 9px 15px; *//* top, right, buttom, left */
			lineHeight: 1.9
		}
	},
	breakpoints: [32, 48, 64, 80] //640,830,1024,1280 px
}

export default theme