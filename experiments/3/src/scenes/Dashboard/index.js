import React from 'react';
import PropTypes from 'prop-types'
import Tab from '../../components/Tabs/Tab'
import Panel from '../../components/Tabs/Panel'
import {DashboardDiv} from './style'
const Dashboard = props => {
    // console.log('Dashboard')
    // console.log(props)
    return (
        <DashboardDiv>  
            <Tab>
                   <Panel label='Generelt' icon="generelt">
                        <div>Lorem ipsum1</div>
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
                    </Panel>
            </Tab>
           
        </DashboardDiv>
    )
}

Dashboard.propTypes = {
   
}

export default Dashboard