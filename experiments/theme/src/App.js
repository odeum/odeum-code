import React, { Component } from 'react'
import { Layout, Wrapper } from './components/Styles'
/*eslint-disable*/
import IconTest from './IconTest'
import ButtonTest from './ButtonTest'
/*eslint-enable*/

class App extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                <Layout>
                    <div>
                        <ButtonTest />
                        {/*<IconTest />*/}
                    </div>
                </Layout>
                </Wrapper>
            </div>
    )    
  }
}

export default App
