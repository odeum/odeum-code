import React, { Component } from 'react'
import { Layout, Wrapper, Spacer, Room } from './components/Styles'
/*eslint-disable*/
import IconTest from './IconTest'
import { ButtonTest, ButtonTest2 } from './ButtonTest'
import ColorPalette from './components/ColorPalette'
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
                        <Spacer space={'0.8rem'} />
                        <IconTest />                        
                    </div>
                </Layout>
                </Wrapper>
                <Room />
                <ColorPalette />
            </div>
		)    
	}
}

export default App
