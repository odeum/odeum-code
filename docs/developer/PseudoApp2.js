import React, { Component } from 'react'
import { AppFramework, StateManager } from 'odeum-codejs'
import Playground from 'odeum-playground'
import connectAPI from 'odeum-api'
import APIConnector from 'odeum-connect'

/*
odeum-codejs
odeum-cli
odeum-components, 
odeum-api, 
odeum-connect, 
odeum-framework, 
odeum-state, 
odeum-app, 
odeum-update,
odeum-help, 
odeum-playground, 
odeum-styles
odeum-appbuilder
*/

/*eslint-disable */
/*eslint-enable */

class App extends Components {

  constructor(props) {
    super(props)

  }

  render() {

    return (

        <Playground>

            <Header>
                <HeaderLogo />
                <HeaderSearchBar />
                <HeaderNotifications />
                <HeaderUserProfile />
            </Header>

            <Menu>
                <Messages />
                <MenuList />
                    <MenuListItem />
                <MenuUserList />
                <AppMarket />
            </Menu>
            
            <Footer>
                <FooterLabel />
                <FooterHelp />
            </Footer>

        </Playground>

    )

  }

}

export default App
