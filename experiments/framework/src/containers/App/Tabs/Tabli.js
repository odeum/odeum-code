import React, { Component } from 'react'
import {TabLabel} from '../styles/TabStyles'
//REMOVE
class Tabli extends Component {
    componentDidUpdate(){
    }
    render() {
        return (
        <TabLabel className={this.props.className}>{this.props.children}</TabLabel>
        )
    }
}

export default Tabli