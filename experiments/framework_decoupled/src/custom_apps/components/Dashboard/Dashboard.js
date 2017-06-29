import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as dashboardActions from './dashboardActions'
import { DashboardDiv } from './dashboardStyles'
import { loadTabs } from 'store/modules/tabs'
class DashboardContainer extends Component {

    componentWillMount() {
        this.props.loadTabs('Dashboard')

    }
    render() {
        // const childWithProps = React.Children.map(this.props.children,
        // (child)=> React.cloneElement(child,{updateTabWrapper:this.props.updateTab}))
        return (
            <DashboardDiv>
              { this.props.children }
            </DashboardDiv>
        )
    }
}

DashboardContainer.propTypes = {
}
const mapStateToProps = (state, ownProps) => ({

})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadTabs
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)