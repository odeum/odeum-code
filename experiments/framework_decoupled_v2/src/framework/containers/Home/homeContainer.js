import React from 'react'
import AsyncComponent from 'constants/AsyncComponent'
/*Routing*/
import { Switch, Route } from 'react-router-dom'
/*Theme*/
import theme from 'assets/theme'
import { ThemeProvider } from 'styled-components'
/*Framework Containers */
import Header from 'framework/containers/Header/HeaderContainer'
import Menu from 'framework/containers/Menu/MenuContainer'
/*Redux Selectors*/
import { connect } from 'react-redux'
import { Scenes } from 'framework/store/selectors/scenes'

function LoadCustomComponents(scene) {
    // console.log(name)
    /*eslint-disable-next-line*/
    const LoadComp = AsyncComponent(() => import('custom_apps/containers/' + scene.name + '/index.js').then(module => module.default, { name: scene.name }),{scene:scene})
    return LoadComp
}

const mapStateToProps = (state) => ({
    scenes: Scenes(state)
})

class HomeContainer extends React.Component {
    render() {
        var { scenes } = this.props
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Header />
                    <Menu />
                    <Switch>
                        {scenes.map(scene => (
                            <Route key={scene.name} path={scene.location} component={LoadCustomComponents(scene)} />
                        )
                        )}
                    </Switch>
                </div>
            </ThemeProvider>)
    }
}
export default connect(mapStateToProps)(HomeContainer)