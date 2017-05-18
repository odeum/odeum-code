import React, { Component } from 'react'
import FooterLabel from './components/FooterLabel'
import FooterLabelDiv from './components/FooterLabelStyles'

// App for testing Footerlabel component

class App extends Component {
  render() {
    return (
      <div>
        <FooterLabelDiv>
          <FooterLabel open={true} />
        </FooterLabelDiv>
      </div>
    )
  }
}

export default App

// Props:
//    url: string, open: bool
