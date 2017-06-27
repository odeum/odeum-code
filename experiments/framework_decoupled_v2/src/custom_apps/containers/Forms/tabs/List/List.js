import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class List extends Component {
    render() {
        return (
            <div>
               <Link to='/forms/id=801'>801 Form</Link>
            </div>
        )
    }
}

export default List