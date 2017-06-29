import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormsDiv } from './formsStyles'
import { loadTabs } from 'store/modules/tabs'
import { getForms } from 'custom_apps/modules/forms'

class Forms extends Component {
    componentWillMount() {
        // console.log(this.props)
        this.props.loadTabs('Forms')
        this.props.getForms()
    }
    render() {
        //  const childWithProps = React.Children.map(this.props.children,
        //(child)=> React.cloneElement(child,{updateTabWrapper:this.props.updateTab}))
        return (
            <FormsDiv>
              { this.props.children }
            </FormsDiv>
        )
    }
}
const mapStateToProps = (state) => ({

})
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loadTabs,
        getForms
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms)