import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SubTabsContainer from 'containers/Tabs/SubTabsContainer'
import Tab from 'components/Tabs/SubTabs'

class General extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <div>
                <SubTabsContainer>
                    <Tab name={'General'}>General Tab</Tab>
                    <Tab name={'Children'}>{this.props.children}</Tab>
                </SubTabsContainer>
            </div>
        )
    }
}

const mapStateToProps = state => ({})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(General)
