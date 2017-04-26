import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as GlobalActions from '../../store/actions/global'
// import Apps from './apps'
class Container extends Component {
    render() {
        console.log(this.props.children[0])
        return (
            <div>
                {/*<Apps match={this.props.match} dispatch={this.props.onPush}/>*/}
            <ul>
                <li><a href="" onClick={e => {
                    e.preventDefault()
                   
                    this.props.onPush(`/comp1`)
                }
                }> Dispatch Comp1 </a></li>
               <li> <a href="" onClick={e => {
                    e.preventDefault()
                  
                    this.props.onPush(`/comp2`)
                    
                }
                }> Dispatch2 </a></li>
               <li> <Link to='/comp2'>Link</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>({
 match:ownProps.match
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(GlobalActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Container)