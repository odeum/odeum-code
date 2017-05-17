import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FooterLabelDiv, { FooterLabelLink } from './FooterLabelStyles'
import { APP_TITLE, APP_VERSION, APP_COPYRIGHT } from './applegends'

class FooterLabel extends Component {

    constructor(props) {

        super(props)
        // this.handleClick = this.handleClick.bind(this) 
        this.defaultProps = {
            url: 'http://report.odeum.com/',
        }    
    }
    
    handleClick() {
        alert(`Hi ${this.props.url}`)
    }

    render() {        
        return (
            <FooterLabelDiv>
                <FooterLabelLink href={this.props.url || this.defaultProps.url} onClick={this.handleClick}>
                    <b>{APP_TITLE}</b> {'v'}{APP_VERSION} {APP_COPYRIGHT}    
                </FooterLabelLink>
                
            </FooterLabelDiv>
        )
    }
}

FooterLabel.propTypes = {
    url: PropTypes.string.isRequired,
}

export default FooterLabel

