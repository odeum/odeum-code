import React, { Component } from 'react'
import { Layout, Wrapper, Spacer } from './components/Styles'
/*eslint-disable*/
import IconTest from './IconTest'
import { ButtonTest, ButtonTest2 } from './ButtonTest'
/*eslint-enable*/

class App extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                <Layout>
                    <div>
                        <ButtonTest />
                        <Spacer space={'0.8rem'} />
                        <ButtonTest2 />
                        {/*<IconTest />*/}
                    </div>
                </Layout>
                </Wrapper>
            </div>
    )    
  }
}

export default App
