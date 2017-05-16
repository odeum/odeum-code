import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './components/theme'
import Button from './components/Button'
import Icon from './components/Icon'
import * as iconnames from './components/icons'
import * as colors from './components/colors'

const Text = styled.p`
  margin: 1rem 1rem
  font-family: ${(props) => props.theme.font || 'sans-serif'}
`

const Layout = ({children}) => {  
  return(
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)}

class App extends Component {  
  render() {
    return (
      <div>
      <Layout>
        <div>
          <Text>See how the Button below is following the theme!</Text>
          <Button>Themed Button</Button>
          <br /><br />
          <Text>And now the icons with mixed sizes and colors (props)</Text>
          <Icon icon={iconnames.ICON_MENU} size={50} color={colors.GAUGE} active={true} />
          <Icon icon={iconnames.ICON_DASHBOARD} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconnames.ICON_HOME} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconnames.ICON_ASSIGNMENT} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconnames.ICON_ASSIGNMENT_TURNED_IN} size={50} color={colors.TAB_COLOR_8} active={true} />
          <Icon icon={iconnames.ICON_PEOPLE} size={50} color={colors.TAB_COLOR_9} active={true} />
          <Icon icon={iconnames.ICON_CLOUD} size={50} color={colors.TAB_COLOR_1} active={true} />
          <Icon icon={iconnames.ICON_CLOUD_DOWNLOAD} size={50} color={colors.TAB_COLOR_2} active={true} />
          <Icon icon={iconnames.ICON_CLOUD_UPLOAD} size={50} color={colors.TAB_COLOR_3} active={true} />
          <Icon icon={iconnames.ICON_APPS} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconnames.ICON_INPUT} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconnames.ICON_TIMELINE} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconnames.ICON_CODE} size={50} color={colors.TAB_COLOR_7} active={true} />
          <Icon icon={iconnames.ICON_OPACITY} size={50} color={colors.TAB_COLOR_4} active={true} />
          <Icon icon={iconnames.ICON_LANGUAGE} size={50} color={colors.TAB_COLOR_5} active={true} />
          <Icon icon={iconnames.ICON_DATE_RANGE} size={50} color={colors.TAB_COLOR_6} active={true} />

          <Icon icon={iconnames.ICON_MESSAGES} size={50} color={colors.EMERALD_LIGHT} active={true} />
          <Icon icon={iconnames.ICON_HELP} size={50} color={colors.EMERALD_LIGHT} active={true} />
          <Icon icon={iconnames.ICON_LOCK} size={50} color={colors.DREAMY_BLUE} active={true} />
          <Icon icon={iconnames.ICON_NOTIFICATIONS} size={50} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconnames.ICON_NOTIFICATIONS_ACTIVE} size={50} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconnames.ICON_NOTIFICATIONS_NONE} size={50} color={colors.PRIMARY_BLUE} active={true} />          
          <Icon icon={iconnames.ICON_NOTIFICATIONS_OFF} size={50} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconnames.ICON_KEYBOARD_ARROW_DOWN} size={50} color={colors.EMERALD_DARK} active={true} />
          <Icon icon={iconnames.ICON_KEYBOARD_ARROW_UP} size={50} color={colors.EMERALD_DARK} active={true} />
          <Icon icon={iconnames.ICON_KEYBOARD_ARROW_LEFT} size={50} color={colors.EMERALD_DARK} active={true} />
          <Icon icon={iconnames.ICON_KEYBOARD_ARROW_RIGHT} size={50} color={colors.EMERALD_DARK} active={true} />


          <Text>Testing default props ... </Text>
          <Icon icon={iconnames.ICON_SEARCH} size={50} active={true} />
          <Icon icon={iconnames.ICON_LOCK_OPEN} color={colors.DREAMY_BLUE} active={false} />
          <Icon icon={iconnames.ICON_CLOSE} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconnames.ICON_CHECK} color={colors.PRIMARY_BLUE} active={true} />
          <Icon icon={iconnames.ICON_CHECK_CIRCLE} color={colors.MENUBAR_SELECTED} active={true} />

          <Icon icon='close' size={50} color={colors.DREAMY_BLUE} active={true} />
          <Icon icon='notifications' active={true} />
          <Icon icon='' active={true} />
          <Icon icon='' color={colors.DREAMY_BLUE} active={true} />
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
