import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FooterLabelLink } from './FooterLabelStyles'
import { APP_WEBSITE, APP_TITLE, APP_VERSION, APP_COPYRIGHT } from './applegends'

class FooterLabel extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this) 
        this.defaultProps = {
            url: APP_WEBSITE,
            open: false
        }    
    }

    handleOpen(open) {
    if(open)
        return '_new'
    }

    handleClick(event) {
//  TODO: State Management of some sort and clean up.

        if(typeof this.props.url === 'undefined') {
            /*eslint-disable*/
            console.log(`Elvis has left the building for ${this.defaultProps.url}`)
            /*eslint-enable*/
        }
        else {
            /*eslint-disable*/
            console.log(`Elvis has left the building for ${this.props.url}`)
            /*eslint-enable*/
        }
    }

// This syntax ensures `this` is bound within handleClick.
// Warning: this is *experimental* property initializer syntax.
//     handleClick = () => {
//     console.log('this is:', this);
//   }

    render() {
        return (
            <FooterLabelLink 
                target={this.handleOpen(this.props.open || this.defaultProps.open)} 
                href={this.props.url || this.defaultProps.url} 
                onClick={this.handleClick}>
                <b>{APP_TITLE}</b> {APP_VERSION} {APP_COPYRIGHT}
            </FooterLabelLink>                
        )
    }
}

FooterLabel.propTypes = {
    url: PropTypes.string,
    open: PropTypes.bool,
}

export default FooterLabel

