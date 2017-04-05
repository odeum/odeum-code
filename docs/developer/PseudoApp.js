import React, { Component } from 'react'
import Playground from './containers/Playground'
import { Header, HeaderLogo, HeaderSearchBar, HeaderNotifications, HeaderUserProfile } from './components/Header'
import { MenuPanel, MenuPanelMessages, MenuPanelList, MenuPanelUserList, MenuPanelAppMarket } from './containers/MenuPanel'
import Workspace from './components/Workspace'
import { Footer, FooterLabel, FooterHelp } from './components/Footer'

/*eslint-disable */
/*eslint-enable */

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      todos: []
    }
  }

  render() {

    return (
      <div className="App">

        <Playground>

            <Header>
                <HeaderLogo />
                <HeaderSearchBar />
                <HeaderNotifications />
                <HeaderUserProfile />
            </Header>

            <MenuPanel>
                <MenuPanelMessages />
                <MenuPanelList />
                    <MenuPanelListItem />
                <MenuPanelUserList />
                <MenuPanelAppMarket />
            </MenuPanel>
            
            <Footer>
                <FooterLabel />
                <FooterHelp />
            </Footer>

        </Playground>

      </div>
    )

  }

}

export default App
