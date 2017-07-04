import React, { Component } from 'react'

class index extends Component {
    render() {
        return (
            <div>
              { this.props.children }
            </div>
        )
    }
}

export default index