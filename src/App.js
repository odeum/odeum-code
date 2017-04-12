import React, { Component } from 'react'
import logo from './codejs_logo.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><br /><br /><br /><br />
          <h2>Here we are building the open source React framework ODEUM CodeJS </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
