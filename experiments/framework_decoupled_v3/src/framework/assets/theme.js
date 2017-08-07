import * as colors from './colors'
import * as fonts from './fonts'

const theme = {
  background: colors.EMERALD_LIGHT,
  color: colors.TAB_COLOR_2,
  font: fonts.PRIMARY,
  tabs:{
      TAB_TEXT:colors.TAB_TEXT,
      TAB_TEXT_SELECTED: colors.TAB_TEXT_SELECTED,
      TAB:colors.TAB,
      TAB_SELECTED:colors.TAB_SELECTED
  },
  button: {
    color: colors.TAB_COLOR_1,
  },
  breakpoints: [ 32, 48, 64, 80 ] //640,830,1024,1280 px
}

export default theme