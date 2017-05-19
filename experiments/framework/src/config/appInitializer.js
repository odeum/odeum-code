//DEPRECATED
//REMOVE
import React from 'react'
import { Route } from 'react-router'
import Home from '../containers/App/Home/Home'
var config = require('../custom_apps/config.json')

const routes =
    (<Route path='/' component={Home}>
        {config.scenes.map((scene, index) => {
            return <Route path={"/" + scene.label} component={scene.label} key={index}>
                {scene.tabs.map((tab, index) => {
                    return <Route path={tab.location} component={tab.name} key={index} />})}
            </Route>
        })}
    </Route>)

export default routes
