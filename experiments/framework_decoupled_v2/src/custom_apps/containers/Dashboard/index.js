import React, { Component } from 'react'
import {Switch,Route} from 'react-router'
import General from './tabs/General'
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
import {loadTabs} from 'framework/store/modules/globalReducer'

class Dashboard extends Component {
    
    componentWillMount() {
        loadTabs(this.props.scene.name)
    }
    
    render() {
    const {scene} = this.props 
    return (
        <div>
           <TabsContainer id={scene.id}/>
           <Switch>
               <Route path="/dashboard/general" component={General}/>
               <Route path="/dashboard/fields" component={General}/>
               <Route path="/dashboard/workflow" component={General}/>
               <Route path="/dashboard/actions" component={General}/>
           </Switch>
        </div>
    )
    }
}

export default Dashboard
