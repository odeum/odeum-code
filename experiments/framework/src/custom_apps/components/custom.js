import React, { Component } from 'react'

class Custom extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Custom