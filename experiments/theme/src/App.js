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
          <Text>See how the Button below is following the theme even though the code for the button hasn't changed?</Text>
          <Button>Themed Button</Button>
          <Button>Themed Button 2</Button>    
          <Icon icon={iconnames.ICON_MENU} size={50} />
          <Icon icon={iconnames.ICON_DASHBOARD} size={50} />
          <Icon icon={iconnames.ICON_SEARCH} size={50} />
          <Icon icon={iconnames.ICON_MESSAGES} size={50} color={colors.EMERALD_LIGHT} />
          <Icon icon={iconnames.ICON_LOCK} size={50} color={colors.DREAMY_BLUE} />
          <Icon icon='info' size={50} color={colors.DREAMY_BLUE} />
        </div>
      </Layout>     
      {/*<Button>Themed Button 3</Button>*/}
      </div>
    )
  }
}

export default App
