
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//import * as s from './styled'
import {HomeDiv} from './styled'

//Header+Drawer
import HeaderContainer from './Header'
import DrawerContainer from './Drawer'

//@ TabsWrapper should be moved to Containers 
//@ IT IS A CONTAINER FFS
import TabsWrapper from './Tabs/TabsWrapper'
import FooterContainer from './Footer'


//Redux+Router
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as GlobalActions from '../../store/actions/global'

class HomeContainer extends Component {

    render() {
      
     // console.log(this.props)
        return (
            <div>
            <HomeDiv>
                <HeaderContainer />
                <DrawerContainer />
                {/*@ Add static tabs as children*/}
                <TabsWrapper children={[{label:'General', location:'/dashboard/general'},{label:'text',location:'/dashboard/text'}]}/>
               {this.props.children}

               <FooterContainer />
            </HomeDiv>
           
            </div>
        )
    }
}
HomeContainer.propTypes = {
    onPush:PropTypes.func.isRequired,

}

const mapStateToProps = (state,ownProps) =>({

    comp: state.drawer.comp
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(GlobalActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)