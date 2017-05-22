import React, { Component } from 'react'


//INFO: This is mandatory for the moment to get to render all the components
class index extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default index