https://github.com/zksailor534/react-adminlte-dash/blob/master/src/styles/variables.js

This module uses Styled Components, so all CSS styling is included when the module is called. However, in order for the dashboard to use the entire available screen height, the parent container components must be set to height: 100%. This component sets the html & body styles, the user must set the app container.

In order to create themed child components (not wrapped in navbarChildren, sidebarChildren, or footerChildren), use the withTheme wrapper provided by styled-components. This will provide the theme object to the child component. See src/styles/variables.js for the available variables. Documentation for these variables is TBD.

