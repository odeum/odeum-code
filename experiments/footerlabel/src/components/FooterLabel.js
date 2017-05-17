import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FooterLabelDiv, { FooterLabelLink } from './FooterLabelStyles'
import { APP_TITLE, APP_VERSION, APP_COPYRIGHT } from './applegends'

class FooterLabel extends Component {

    constructor(props) {

        super(props)
        this.handleClick = this.handleClick.bind(this) 
        this.defaultProps = {
            url: 'http://report.odeum.com/',
            open: false
        }    
    }

    handleOpen(open) {
    if(open === true)
        return '_new'
    // else
    //     {return ''}
    }
    
    handleClick(url) {
        // alert(`Hi ${this.props.url}`)
        console.log(`Sending you off to ${url}`)
        console.log(url)
    }

    render() {        
        return (
            <FooterLabelDiv>
                <FooterLabelLink target={this.handleOpen(this.props.open || this.defaultProps.open)} href={this.props.url || this.defaultProps.url} onClick={this.handleClick(this.props.url)}>
                    <b>{APP_TITLE}</b> {'v'}{APP_VERSION} {APP_COPYRIGHT}    
                </FooterLabelLink>
                
            </FooterLabelDiv>
        )
    }
}

FooterLabel.propTypes = {
    url: PropTypes.string,
    open: PropTypes.bool,
}

export default FooterLabel

// {this.props.open || this.defaultProps.open} '_new'
