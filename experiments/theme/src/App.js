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
          <Text>And now the icons with mixed sizes and colors</Text>
          <Icon icon={iconnames.ICON_MENU} size={75} color={colors.GAUGE} active={true} />
          <Icon icon={iconnames.ICON_DASHBOARD} size={50} color={colors.TAB_COLOR_6} active={true} />
          <Icon icon={iconnames.ICON_SEARCH} size={50} active={true} />
          <Icon icon={iconnames.ICON_MESSAGES} size={50} color={colors.EMERALD_LIGHT} active={true} />
          <Icon icon={iconnames.ICON_LOCK} size={50} color={colors.DREAMY_BLUE} active={true} />
          <Icon icon={iconnames.ICON_LOCK} color={colors.DREAMY_BLUE} active={false} />
          <Icon icon='info' size={50} color={colors.DREAMY_BLUE} active={true} />
          <Icon icon='info' active={true} />
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
