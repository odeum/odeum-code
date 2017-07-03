import React, {Component} from 'react'
import {TabList} from 'components/styles/TabStyles'
class SubTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex
        }
        this.handleTabClick = this.handleTabClick.bind(this)
    }
    handleTabClick(tabIndex){
        //dispatch(action) HERE
        this.setState({
            activeTabIndex:tabIndex===this.state.activeTabIndex? this.props.defaultActiveTabIndex : tabIndex
        })
    }
    renderChildrenWithTabsApiAsProps(){
        return React.Children.map(this.props.children,(child,index)=>{
            return React.cloneElement(child,{
                onClick: this.handleTabClick,
                tabIndex:index,
                isActive:index ===this.state.activeTabIndex
            })
        })
    }
    renderActiveTabContent(){
        const {children} = this.props
        //Should be props
        const {activeTabIndex} = this.state
        if(children[activeTabIndex]){
            return children[activeTabIndex].props.children
        }
    }

    render() {
        return (
            <div>
                <TabList>
                    {this.renderChildrenWithTabsApiAsProps()}
                </TabList>
                <div>
                    {this.renderActiveTabContent()}
                </div>
            </div>
        )
    }
}
SubTabs.defaultProps = {
    defaultActiveTabIndex: 0
}
export default SubTabs