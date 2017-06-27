import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as formsActions from './formsActions'
import {FormsDiv} from './styles'
class Forms extends Component {
    componentWillMount(){
        // console.log(this.props)
         this.props.loadTabs('Forms')
         this.props.getForms()
    }
    render() {
      //  const childWithProps = React.Children.map(this.props.children,
        //(child)=> React.cloneElement(child,{updateTabWrapper:this.props.updateTab}))
        return (
            <FormsDiv>
              {this.props.children}
            </FormsDiv>
        )
    }
}
const mapStateToProps = (state) =>({

})
function mapDispatchToProps(dispatch){
    return bindActionCreators(formsActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Forms)