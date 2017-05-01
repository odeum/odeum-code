import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as s from '../styled/tabs'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as tabsActions from './tabsActions'
import {renderIcons} from '../styled/icons'

class TabsWrapper extends Component {
    static propTypes = {
        children:PropTypes.array,
        activeLabel: PropTypes.string
    }
   icoColor(className) {
        if(className.includes('active'))
        {return('white')}
        else
        {
            return('#34495d')
        }
    }

    render() {
        // let active = 
        return (
            <s.TabList >
                {/*<h4 > Here will be tabs linking to individual components, to each individual drawer satisfying the routes </h4>*/}
                {/*<h4> * PLACEHOLDER *</h4>*/}
                {/*@ 
                @(state.activeLabel === tab.label ? 'active':'')
                @*/}
                { this.props.children.map((tab,index) =>(
                    <s.TabLabel key={index} className={(tab.label === this.props.activeLabel ? 'active' : '')}>
                        <s.TabLink href="#" onClick={e =>{
                            e.preventDefault()
                            this.props.changeTab(tab.location,tab.label)}}
                             className={(tab.label === this.props.activeLabel ? 'active' : '')}>
                            <s.Ico>{renderIcons(tab.icon,(tab.label === this.props.activeLabel ? 'active' : ''))}</s.Ico>
                            {tab.label}
                            </s.TabLink>
                            </s.TabLabel>))}
            </s.TabList>
        );
    }
}
const mapStateToProps = (state)=>({
    activeLabel: state.global.activeLabel
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(tabsActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TabsWrapper)