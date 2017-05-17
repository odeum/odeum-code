//@ React imports
import PropTypes from 'prop-types'
import React, { Component} from 'react'
// //REMOVE
// //@ Redux imports
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import * as TabsActions from './tabsActions.js'

//@ Import icons & styles
import {renderIcons} from './styles/icons'
import * as s from './styles'

class Tab extends Component {
      handleClick(index, event)
    {
        event.preventDefault()
        //@dispatch action to change index in state
        this.props.changeTab(index)
    }
    getChildContext() {
              
        return {
            reactIconBase: {               
                // size: 15,
            }
        }
    }
     icoColor(className) {
        if(className.includes('active'))
        {return('white')}
        else
        {
            return('#34495d')
        }
    }
    _renderTitles()
    {
        function labels(child, index) {
            let active = (this.props.selected === index ? 'active' : '')
            return (
                <s.TabLabel key={index} className={active}>
                    <s.TabLink href="#"
            	         className={active}
                        onClick={this.handleClick.bind(this, index)}>
                       <s.Ico>{renderIcons(child.props.icon,active)}</s.Ico>
                        {child.props.label}
                    </s.TabLink>
                </s.TabLabel>
            )
        }
        return (
            <s.TabList>
                {this.props.children.map(labels.bind(this))}
            </s.TabList>
        )
    }
    _renderContent()
    {
    return(
        <div>
            {this.props.children[this.props.selected]}
            </div>
    )
    }
    render() {
        return (
            <s.Tabss>
            {this._renderTitles()}
            {this._renderContent()}
            </s.Tabss>
        )
    }
}

Tab.propTypes = {
    selected: PropTypes.number,
    changeTab:PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,

}
Tab.childContextTypes={
    reactIconBase: PropTypes.object
}
//TODO get ownProps(url params) and change tab accordingly
//@ compare ownProps(aka URL params) to state,
//@ if url is empty get default state
//@ as of now ownProps will not works without defining a route to tabs to receive url
//@ ownProps params can be passed from the HomeContainer here though
/*function tabCompare (index,url){ 
    //console.log(url)
    if(url!=null)
    {
    //console.log(url)
    return url
    }
    else
    {
        console.log(index)
        return index
    }
}*/
// const mapStateToProps = (state,ownProps) =>( {
//     selected: /*parseInt(tabCompare(*/state.tabs.tab/*),10)*/
// })
// function mapDispatchToProps(dispatch){
//     return bindActionCreators(TabsActions,dispatch)
// }

export default /*connect(mapStateToProps,mapDispatchToProps)*/Tab

