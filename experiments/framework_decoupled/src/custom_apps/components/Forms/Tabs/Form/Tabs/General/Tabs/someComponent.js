import React, { Component } from 'react'
import SubTabsContainer from 'containers/Tabs/SubTabsContainer'
import Tab from 'components/Tabs/SubTabs'
class SomeComponent extends Component {
    render() {
        return (
            <div>
                Some component
                <SubTabsContainer>
                    <Tab name={'SomeComponent Tab'}>Something</Tab>
                    <Tab name={'SomeComponent Tab'}>Not important</Tab>
                </SubTabsContainer>
            </div>
        )
    }
}

export default SomeComponent