import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TabsWrapper extends Component {
    static propTypes = {
        children:PropTypes.array
    }
    render() {
        return (
            <div style={{background:'red',height:50, marginTop:-21}}>
                <h4 > Here will be tabs linking to individual components, to each individual drawer satisfying the routes </h4>
            </div>
        );
    }
}

export default TabsWrapper;