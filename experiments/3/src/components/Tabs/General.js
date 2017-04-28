import React, { Component } from 'react';

class General extends Component {
    componentWillMount(){
        // dispatch(ADD_TAB)
        console.log('comp Mounted')
    }
    render() {
        return (
            <div>
                General
            </div>
        );
    }
}

export default General;