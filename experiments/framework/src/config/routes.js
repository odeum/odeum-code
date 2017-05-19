//DEPRECATED
//REMOVE

import React from 'react'
import {Route} from 'react-router'
import * as scenes from '../scenes/scenesCombiner'
import Home from '../containers/App/Home/Home'
import dashboardTabs from '../scenes/Dashboard/Tabs/dashboardTabs'
import Dynamic from '../containers/App/Tabs/Dynamic'

export default <Route path="/" component={Home}>
        <Route path="dashboard/" component={scenes.Dashboard} >
          <Route path="general" component={dashboardTabs.General} />
          <Route path="fields" component={dashboardTabs.Fields} />
          <Route path="workflow" component={dashboardTabs.Workflow} />
          <Route path="users" component={dashboardTabs.Users} />
          <Route path="operations" component={dashboardTabs.Operations} />
          <Route path="configuration" component={dashboardTabs.Configuration} />
          <Route path="design" component={dashboardTabs.Design} />
        </Route>
        <Route path="/reports" component={scenes.Reports}>
        </Route>
        <Route path="/organisation" component={scenes.Organisation}>
        </Route>
        <Route path="/settings" component={scenes.Settings}>
        </Route>
        <Route path="/forms" component={scenes.Forms}>
        </Route>
        <Route path="/:dynamic/dynamic" component={Dynamic}/>
      </Route>