import React, {Component} from 'react'
// import * as styled from '../styles/NotFoundStyles'
import { Div, ImgDiv, E404, ErrMsg, ErrMsg2, Img } from '../styles/NotFoundStyles'
import HeaderLogo from '../../assets/codejs_logo.png'
import {connect} from 'react-redux'
import {replace} from 'react-router-redux'
class NotFound extends Component {
  
  componentWillMount() {
    this.props.onMount()
  }
  
  render() {
    return (
      <Div>
          <ImgDiv>
            <Img src={ HeaderLogo } alt="Logo" />
          </ImgDiv>
          <E404> 404 Not Found</E404>
          <ErrMsg> Welcome to the dark side!
            <br/> We have cookies! </ErrMsg>
          <ErrMsg2>There's nothing to see here... so you should go back </ErrMsg2>
        </Div>
    )
  }
}
const mapStateToProps = state => {
return {}
}
function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(replace('/e404'))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NotFound)
