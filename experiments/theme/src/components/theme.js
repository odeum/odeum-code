import * as colors from './colors'
// import { FOOTER } from './colors'
// named import
import * as fonts from './fonts'

const theme = {
  background: colors.EMERALD_LIGHT,
  color: colors.TAB_COLOR_2,
  font: fonts.PRIMARY,
  buttoncolor: colors.BUTTON_TEXT,
  buttonbackground: colors.BUTTON_ALTERNATIVE,  

  button: {
    color: colors.BUTTON_TEXT,
    background: colors.BUTTON_ALTERNATIVE,
  },  

//  iconstyle can be overridden in the JSX call with:
//  style={{verticalAlign: '-6px', paddingRight: '20px'}} 

  iconstyle: {
      verticalAlign: '-3px', /* -10% */
      paddingRight: '6px'
    }
}

export default theme
