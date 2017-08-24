import * as colors from './colors'
import * as fonts from './fonts'

const theme = {
	font: fonts.DEFAULT,
	fontWeight: fonts.FONT_WEIGHT,
	fontStyle: fonts.FONT_STYLE, 

	button: {
		color: colors.BUTTON_TEXT,
		background: colors.BUTTON_DEFAULT,
	},

    //  iconstyle can be overridden in the JSX call with:
    //  style={{verticalAlign: '-6px', paddingRight: '20px'}} 

	iconStyle: {
		verticalAlign: '-3px', /* -10% */
		paddingRight: '6px'
	},
    
	buttonSize: {
		large: {
			size: fonts.SIZE_LARGE,
			padding: '9px 20px 9px 15px', /* top, right, buttom, left */
			lineHeight: 1.9
		},
		default: {
			size: fonts.SIZE_DEFAULT,
			padding: '9px 20px 9px 15px', /*9px 20px 9px 15px; *//* top, right, buttom, left */
			lineHeight: 1.9
		},
		small: {
			size: fonts.SIZE_SMALL,
			padding: '9px 20px 9px 15px', /* top, right, buttom, left */
			lineHeight: 1.9
		},
		xsmall: {
			size: fonts.SIZE_EXTRA_SMALL,
			padding: '9px 20px 9px 15px', /* top, right, buttom, left */
			lineHeight: 1.9
		}
	}
}

export default theme
