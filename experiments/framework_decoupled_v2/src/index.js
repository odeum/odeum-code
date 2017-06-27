import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from 'registerServiceWorker';
import { Provider } from 'react-redux'
import store from 'framework/store'
import { BrowserRouter as Router } from 'react-router-dom'
import HomeContainer from 'framework/containers/Home/homeContainer'
require("react-hot-loader/patch")

const renderApp = Component => {
    ReactDOM.render(
        <Provider store={store}>
            {/*TODO: Add LOCATION_CHANGE Dispatch
            https://github.com/ReactTraining/react-router/blob/7f6706dab4827afc1c26a58418f8ef8c8ab40125/website/examples/Redux.js
            */}
            <Router>
                <AppContainer>
                    <Component />
                </AppContainer>
            </Router>
        </Provider>,
        document.getElementById('root')
    )
}

renderApp(HomeContainer)
if (module.hot) {
  module.hot.accept('framework/containers/Home/homeContainer', () => renderApp(HomeContainer));
}

registerServiceWorker()

