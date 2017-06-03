import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './components/theme'
import Button, { Button1, Button2 } from './components/Button'
import { Wrapper } from './components/Styles'
import Icon from './components/Icon'
import * as iconname from './components/icons'
import * as colors from './components/colors'

const Text = styled.p`
  margin: 0rem 0.38rem
  font-size: 1rem
  font-family: ${(props) => props.theme.font || 'sans-serif'}
`

const Layout = ({children}) => {  
  return(
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)}

class App extends Component {

  prettifyIconName(name) { 
    return name.replace(/_/g, ' ')
  }

  render() {
    // console.log(this.prettifyIconName(iconname.ICON_MENU))
    return (
      <div>
        <Wrapper>
            <Button2>Hello World 2</Button2>
        </Wrapper>
      <Layout>

        <div>
          <Text>See how the Button below is following the theme!</Text>
          <Button>Themed Button</Button>
          <br /><br />
          <Text>And now the icons with mixed sizes and colors (props)</Text>
    
          <Icon icon={iconname.ICON_MENU} size={50} color={colors.GAUGE} active={true} />
          <Text>{this.prettifyIconName(iconname.ICON_MENU)}</Text>
    
          <Icon icon={iconname.ICON_DASHBOARD} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconname.ICON_HOME} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_ASSIGNMENT} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_ASSIGNMENT_TURNED_IN} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_PEOPLE} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_GROUP_ADD} size={50} color={colors.TAB_COLOR_10} active={true} />
          <Icon icon={iconname.ICON_PERSON} size={50} color={colors.TAB_COLOR_1} active={true} />
          <Icon icon={iconname.ICON_PERSON_ADD} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconname.ICON_MAIL_OUTLINE} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_SETTINGS_CELL} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_EXTENSION} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconname.ICON_ARROW_DROP_DOWN} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_ARROW_DROP_UP} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_COPYRIGHT} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_CLOUD} size={50} color={colors.TAB_COLOR_1} active={true} />
          <Icon icon={iconname.ICON_CLOUD_DOWNLOAD} size={50} color={colors.TAB_COLOR_2} active={true} />
          <Icon icon={iconname.ICON_CLOUD_UPLOAD} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconname.ICON_APPS} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_INPUT} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_TIMELINE} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_CODE} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_OPACITY} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_LANGUAGE} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_DATE_RANGE} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconname.ICON_CANCEL} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_MODE_EDIT} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_PLACE} size={50} color={colors.TAB_COLOR_10} active={true} />
          <Icon icon={iconname.ICON_PHONE} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_VISIBILITY} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_VISIBILITY_OFF} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconname.ICON_ACCOUNT_BOX} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_INSERT_DRIVE_FILE} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_VIEW_HEADLINE} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_VIEW_MODULE} size={50} color={colors.TAB_COLOR_10} active={true} />
          <Icon icon={iconname.ICON_SHARE} size={50} color={colors.TAB_COLOR_1} active={true} />
          <Icon icon={iconname.ICON_FAVORITE} size={50} color={colors.TAB_COLOR_2} active={true} />
          <Icon icon={iconname.ICON_FAVORITE_BORDER} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconname.ICON_LABEL} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_LABEL_OUTLINE} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_STAR} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconname.ICON_STARS} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_TODAY} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_PLAY_CIRCLE_FILLED} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_PLAY_CIRCLE_OUTLINE} size={50} color={colors.TAB_COLOR_10} active={true} />
          <Icon icon={iconname.ICON_SKIP_NEXT} size={50} color={colors.TAB_COLOR_1} active={true} />
          <Icon icon={iconname.ICON_SKIP_PREVIOUS} size={50} color={colors.TAB_COLOR_2} active={true} />
          <Icon icon={iconname.ICON_PIE_CHART} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconname.ICON_PIE_CHART_OUTLINED} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_SHOW_CHART} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_INSERT_CHART} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconname.ICON_EQUALIZER} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_WEB_ASSET} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_WEB} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_TABLET_MAC} size={50} color={colors.TAB_COLOR_10} active={true} />
          <Icon icon={iconname.ICON_LAPTOP_MAC} size={50} color={colors.TAB_COLOR_1} active={true} />
          <Icon icon={iconname.ICON_DESKTOP_MAC} size={50} color={colors.TAB_COLOR_2} active={true} />
          <Icon icon={iconname.ICON_PHONE_IPHONE} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconname.ICON_MESSAGES} size={50} color={colors.EMERALD_LIGHT} active={true} />
          <Icon icon={iconname.ICON_HELP} size={50} color={colors.EMERALD_LIGHT} active={true} />
          <Icon icon={iconname.ICON_LOCK} size={50} color={colors.DREAMY_BLUE} active={true} />
          <Icon icon={iconname.ICON_LOCK_OPEN} size={50} color={colors.DREAMY_BLUE} active={true} />
          <Icon icon={iconname.ICON_NOTIFICATIONS} size={50} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconname.ICON_NOTIFICATIONS_ACTIVE} size={50} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconname.ICON_NOTIFICATIONS_NONE} size={50} color={colors.PRIMARY_BLUE} active={true} />          
          <Icon icon={iconname.ICON_NOTIFICATIONS_OFF} size={50} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconname.ICON_KEYBOARD_ARROW_DOWN} size={50} color={colors.EMERALD_DARK} active={true} />
          <Icon icon={iconname.ICON_KEYBOARD_ARROW_UP} size={50} color={colors.EMERALD_DARK} active={true} />
          <Icon icon={iconname.ICON_KEYBOARD_ARROW_LEFT} size={50} color={colors.EMERALD_DARK} active={true} />
          <Icon icon={iconname.ICON_KEYBOARD_ARROW_RIGHT} size={50} color={colors.EMERALD_DARK} active={true} />          
          <Icon icon={iconname.ICON_DELETE} size={50} color={colors.DREAMY_BLUE} active={true} />
          <Icon icon={iconname.ICON_DELETE_FOREVER} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_CONTENT_COPY} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_BUG_REPORT} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_PHOTO_CAMERA} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_SHORT_TEXT} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_EVENT} size={50} color={colors.TAB_COLOR_10} active={true} />
          <Icon icon={iconname.ICON_LIST} size={50} color={colors.TAB_COLOR_1} active={true} />
          <Icon icon={iconname.ICON_WORK} size={50} color={colors.TAB_COLOR_2} active={true} />
          <Icon icon={iconname.ICON_ACCESS_TIME} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconname.ICON_MIC} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_VIDEOCAM} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_CALL} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconname.ICON_MESSAGE} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_FILTER_LIST} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_ATTACH_FILE} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_DIRECTIONS} size={50} color={colors.TAB_COLOR_10} active={true} />
          <Icon icon={iconname.ICON_MOOD} size={50} color={colors.TAB_COLOR_1} active={true} />
          <Icon icon={iconname.ICON_CHECK_BOX} size={50} color={colors.TAB_COLOR_2} active={true} />
          <Icon icon={iconname.ICON_RADIO_BUTTON_CHECKED} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconname.ICON_GRID_ON} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_LAYERS} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_REFRESH} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconname.ICON_SYNC} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconname.ICON_SYNC_DISABLED} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconname.ICON_SYNC_PROBLEM} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconname.ICON_SEARCH} size={50} color={colors.TAB_COLOR_1} active={true} />          
          <Icon icon={iconname.ICON_CLOSE} size={50} color={colors.TAB_COLOR_2} active={true} />
          <Icon icon={iconname.ICON_CHECK} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconname.ICON_CHECK_CIRCLE} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconname.ICON_ADD_CIRCLE} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconname.ICON_ADD_CIRCLE_OUTLINE} size={50} color={colors.EMERALD_DARK} active={true} />
          
          <br /><br />
          <Text>Testing default props ... </Text>
          
          <Icon icon={iconname.ICON_SEARCH} size={50} active={true} />
          <Icon icon={iconname.ICON_LOCK_OPEN} color={colors.DREAMY_BLUE} active={false} />
          <Icon icon={iconname.ICON_CLOSE} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconname.ICON_CHECK} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconname.ICON_CHECK_CIRCLE} color={colors.MENUBAR_SELECTED} active={true} />
          <Icon icon={iconname.ICON_ADD_CIRCLE} color={colors.PRIMARY_BLUE} active={true} />

          <Icon icon='close' size={50} color={colors.DREAMY_BLUE} active={true} />
          <Icon icon='notifications' active={true} />          
          <Icon icon='' color={colors.DREAMY_BLUE} active={true} />

          <br /><br />
          <Text>Provoking prop type errors in the console ...</Text>
          <Icon icon='' size={'50'} active={true} />
          <Icon />

        </div>
      </Layout>
      <br /><br />
      <Button>Themed Button outside layout</Button>
      </div>
    )    
  }
}

export default App
