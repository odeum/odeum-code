import * as colors from './colors'
import * as fonts from './fonts'

const theme = {
    background: colors.EMERALD_LIGHT,
    color: colors.TAB_COLOR_2,
    font: fonts.PRIMARY,

    button: {
        color: colors.BUTTON_TEXT,
        background: colors.BUTTON_PRIMARY,
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
            padding: '10px 20px 10px 15px',
            lineHeight: 1.9
        },
        normal: {
            size: fonts.SIZE_NORMAL,
            padding: '10px 20px 10px 15px',
            lineHeight: 1.9
        },
        small: {
            size: fonts.SIZE_SMALL,
            padding: '10px 20px 10px 15px',
            lineHeight: 1.9
        },
        xsmall: {
            size: fonts.SIZE_EXTRA_SMALL,
            padding: '10px 20px 10px 15px',
            lineHeight: 1.9
        }
    }
}

export default theme
