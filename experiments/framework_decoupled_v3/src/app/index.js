import React, { Component } from 'react'
import {Div} from 'app/styles/index'
class index extends Component {
    render() {
        return (
            <Div style={{'overflow-y':'scroll'}}>
              { this.props.children }
            </Div>
        )
    }
}

export default index