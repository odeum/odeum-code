import React, { Component } from 'react';
import TabsContainer from 'framework/containers/Tabs/TabsContainer'
import Form from 'custom_apps/containers/Forms/tabs/Form/Form'
import { Switch } from 'react-router'
import PropsRoute from 'constants/PropsRoute'
import { injectAsyncReducers } from 'framework/store'
import forms from 'custom_apps/modules/formsReducer'
import {loadTabs} from 'framework/store/modules/globalReducer'
injectAsyncReducers({
    forms: forms
})


class Forms extends Component {
    
    componentWillMount() {
        loadTabs(this.props.scene.id)
    }
    
    render() {
        const {scene} = this.props
        return (
            <div>
                <TabsContainer id={scene.id} />
                <Switch>
                    <PropsRoute path='/forms/form/:id' component={Form} />
                </Switch>
            </div>
        );
    }
}

export default Forms;