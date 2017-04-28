import React from 'react';
// import PropTypes from 'prop-types'
// import Tab from '../../components/Tabs/Tab'
// import Panel from '../../components/Tabs/Panel'
import { DashboardDiv } from './style'
// import * as scenes from '../scenes'

const Dashboard = props => {
    // console.log('Dashboard')
    console.log(props)

    return (
        <DashboardDiv>
            {/*            
        {/*<button onClick={e=>{
                e.preventDefault()
                props.RemoveTab(5)}
                }>
                Remove
                </button> 
            <button onClick={e=>{
                e.preventDefault()
                props.AddTab('text','add')
                }}>Add </button>*/}
            {/*<Tab changeTab={props.changeTabs} selected={props.selected}>*/}
            {/*<Panel label='Generelt' icon="generelt">
                        {props.children}
                    </Panel>
                    <Panel label='Felter' icon='felter'>
                        <div>Lorem ipsum2</div>
                    </Panel>
                    <Panel label='Arbejdsgang' icon='arbejdsgang'>
                        <div>Lorem ipsum3</div>
                    </Panel>
                     <Panel label='Brugere' icon='brugere'>
                        <div>Lorem ipsum4</div>
                    </Panel>
                     <Panel label='Handlinger' icon='handlinger'>
                        <div>Lorem ipsum5</div>
                    </Panel>
                      <Panel label='Konfiguration' icon='settings'>
                        <div>Lorem ipsum6</div>
                    </Panel>
                      <Panel label='Design' icon='design'>
                        <div>Lorem ipsum7</div>
                    </Panel>*/}
            {/*Another comment*/}
            {/*{props.tabs.map((tab) => (
                    <Panel label={tab.label} icon={tab.icon} key={tab.id}>Lorem Ipsum {tab.id} </Panel>
                ))}*/}
            {/*</Tab>*/}
        
        
        
        {/*@ Oldcode up*/}
       
        {/*New code*/}
        {/*@<General />
        @<Tasks />
        @<Forms />*/}
        </DashboardDiv>
    )
}



export default Dashboard

