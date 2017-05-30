Guidelines (Getting started with ODEUM CodeJS)
==============================================

ODEUM CodeJS is a React-based UI framework for building Web & Mobile Applications.

<!-- TOC -->

- [1. ODEUM CodeJS Github repository](#1-odeum-codejs-github-repository)
    - [1.1. Github access and usage (branches)](#11-github-access-and-usage-branches)
- [2. Must-read and tutorials (will update continously)](#2-must-read-and-tutorials-will-update-continously)
    - [2.1. Technology](#21-technology)
    - [2.2. Articles](#22-articles)
    - [2.3. Video tutorials](#23-video-tutorials)
- [3. Hackathons](#3-hackathons)
- [4. ODEUM CodeJS App Components Reference Guide](#4-odeum-codejs-app-components-reference-guide)
    - [4.1. Naming Conventions](#41-naming-conventions)
    - [4.2. Create-React-App (CRA)](#42-create-react-app-cra)
        - [4.2.1. Setup instructions](#421-setup-instructions)
- [5. Experiments (initial developer experiments)](#5-experiments-initial-developer-experiments)
    - [5.1. Working with the ODEUM CodeJS framework (evolution)](#51-working-with-the-odeum-codejs-framework-evolution)
    - [5.2. Contributors (primary):](#52-contributors-primary)
    - [5.3. Experiments location](#53-experiments-location)
    - [5.4. Experiments List](#54-experiments-list)
        - [5.4.1. Codesplitting / PRPL (codesplitting)](#541-codesplitting--prpl-codesplitting)
        - [5.4.2. Framework (framework)](#542-framework-framework)
        - [5.4.3. Themes and themable components in ODEUM CodeJS (theme)](#543-themes-and-themable-components-in-odeum-codejs-theme)
        - [5.4.4. Footerlabel](#544-footerlabel)
        - [5.4.5. Redux Forms (redux-form)](#545-redux-forms-redux-form)
        - [5.4.6. Datagrid/Datatables](#546-datagriddatatables)
        - [5.4.7. React Drag and Drop (react-dnd)](#547-react-drag-and-drop-react-dnd)
        - [5.4.8. WYSIWYG editor (draftjs)](#548-wysiwyg-editor-draftjs)
        - [5.4.9. GraphQL + Redux](#549-graphql--redux)
        - [5.4.10. Creating NPM packages containing our framework](#5410-creating-npm-packages-containing-our-framework)
        - [5.4.11. Demo App to Connect to the ODEUM CodeJS framework](#5411-demo-app-to-connect-to-the-odeum-codejs-framework)
        - [5.4.12. Full-screen presentations (COWI/ODEUM Sales Manager/ODEUM Report)](#5412-full-screen-presentations-cowiodeum-sales-managerodeum-report)
        - [5.4.13. Client State Recorder (CS)](#5413-client-state-recorder-cs)
        - [5.4.14. Client State Player (Time Travel) (SS)](#5414-client-state-player-time-travel-ss)
        - [5.4.15. Login](#5415-login)
        - [5.4.16. REST and components API documentation platform/style](#5416-rest-and-components-api-documentation-platformstyle)
        - [5.4.17. REST API implementation experiments](#5417-rest-api-implementation-experiments)
        - [5.4.18. IAM - Identity and Access Management](#5418-iam---identity-and-access-management)
        - [5.4.19. ODEUM CodeJS experiments site in production](#5419-odeum-codejs-experiments-site-in-production)
        - [5.4.20. Deployment](#5420-deployment)
        - [5.4.21. JavaScript Style Guide](#5421-javascript-style-guide)
        - [5.4.22. Debugging with Chrome in VS Code](#5422-debugging-with-chrome-in-vs-code)
        - [5.4.23. Test setup scenarios](#5423-test-setup-scenarios)
        - [5.4.24. Help Server (Help Items)](#5424-help-server-help-items)
        - [5.4.25. Responsiveness](#5425-responsiveness)
        - [5.4.26. Search Server](#5426-search-server)
        - [5.4.27. Filename Refactoring (VSCode Extension)](#5427-filename-refactoring-vscode-extension)
        - [5.4.28. ODEUM Slack Service](#5428-odeum-slack-service)
        - [5.4.29. ODEUM CodeJS Tutorial Site](#5429-odeum-codejs-tutorial-site)
- [6. Apps](#6-apps)
    - [6.1. ThemeBuilder](#61-themebuilder)
    - [6.2. HelpBuilder](#62-helpbuilder)
    - [6.3. AppBuilder](#63-appbuilder)
    - [6.4. ComponentBuilder](#64-componentbuilder)
    - [6.5. GeoCloud2 (GC2) porting](#65-geocloud2-gc2-porting)
    - [6.6. ODEUM Connect](#66-odeum-connect)
    - [6.7. ODEUM Dashboard](#67-odeum-dashboard)
    - [6.8. ODEUM Help Server](#68-odeum-help-server)
    - [6.9. ODEUM Search Server](#69-odeum-search-server)
- [7. Icons](#7-icons)
    - [7.1. Icons location](#71-icons-location)
- [8. Future Technology ideas](#8-future-technology-ideas)
    - [8.1. GraphQL](#81-graphql)
    - [8.2. Data Branching (SS)](#82-data-branching-ss)
    - [8.3. Point of failure:](#83-point-of-failure)
    - [8.4. Using a failover loader](#84-using-a-failover-loader)
    - [8.5. Offline-first approach](#85-offline-first-approach)
- [9. Folder Structure Convention](#9-folder-structure-convention)
    - [9.1. Source files](#91-source-files)
    - [9.2. Public static source files](#92-public-static-source-files)
    - [9.3. Folder Structure Convention example for ODEUM Report Web App](#93-folder-structure-convention-example-for-odeum-report-web-app)
- [10. JavaScript and React Style Guide](#10-javascript-and-react-style-guide)
    - [10.1. Guidelines](#101-guidelines)
    - [10.2. PropTypes](#102-proptypes)
    - [10.3. Components](#103-components)
        - [10.3.1. Stateless components (presentational components)](#1031-stateless-components-presentational-components)
        - [10.3.2. Stateful components (container components)](#1032-stateful-components-container-components)
- [11. Visual Studio Code Extensions](#11-visual-studio-code-extensions)
    - [11.1. Atom Keymap](#111-atom-keymap)
    - [11.2. Babel ES6/ES7](#112-babel-es6es7)
    - [11.3. Debugger for Chrome](#113-debugger-for-chrome)
    - [11.4. ESLint](#114-eslint)
    - [11.5. NPM Intellisense](#115-npm-intellisense)
    - [11.6. React Native Tools](#116-react-native-tools)
    - [11.7. Reactjs code snippets](#117-reactjs-code-snippets)
    - [11.8. vscode-styled-components](#118-vscode-styled-components)
- [12. ODEUM API](#12-odeum-api)
- [13. ODEUM 2GO!](#13-odeum-2go)

<!-- /TOC -->

# 1. ODEUM CodeJS Github repository
- Find it here: 
- [ODEUM CodeJS Github Repository](https://github.com/odeum/odeum-codejs)

```
Git clone https://github.com/odeum/odeum-codejs
```

## 1.1. Github access and usage (branches)

Initially we pull and commit work to 3 branches:

- development/alpha
- development/beta
- MASTER

# 2. Must-read and tutorials (will update continously)
The following technology areas and articles are all must-reads for newcommers to React and ODEUM CodeJS. 

## 2.1. Technology
- React (15.x)
- Redux (3.6.x)
- Redux DevTools Extension (and/or Chrome extension)
- React-Router-Redux (4.x)
- Styled-Components (1.4.x)
- Grid Styled (https://github.com/jxnblk/grid-styled) - http://jxnblk.com/grid-styled/ 

## 2.2. Articles
- [Redux.org](http://redux.js.org)
- [Article from Mapbox](https://www.mapbox.com/blog/redux-for-state-management-in-large-web-apps/)

## 2.3. Video tutorials
- [Getting Started with Redux - Dan Abramov](https://egghead.io/courses/getting-started-with-redux)

# 3. Hackathons
All interns and freelancers are incited to attend our hackathons which is held at WebHouse every second Monday from 17.00 - 21.30. 

During our hackathons we:
- Eat pizza or other healthy meals (Angus beef for the win)
- Drink Coke and coffee
- State of the Union - how far are we with specific experiments and real-world code
- Coding Dojo - learning by doing
- Takeaways and new milestones

# 4. ODEUM CodeJS App Components Reference Guide

- All decomposed and architected App Components are listed and explained in a Microsoft Word document you can find here: [AppComponents.docx](/docs/AppComponents.docx)

## 4.1. Naming Conventions
- CB will be in charge of all naming conventions so refactoring can be at a minimum for later stages with more active contributors. If in doubt on what to call ANYTHING, ask CB. The AppComponents Word document located in /docs/AppComponents.docx will introduce component naming until further API documentation has been defined

## 4.2. Create-React-App (CRA)
All experiments is based upon the Create-React-App (CRA) boilerplate (and zero-configuration) setup from the React team. Using CRA makes it easy to test and check-out other developers experiments and code.

### 4.2.1. Setup instructions

# 5. Experiments (initial developer experiments)

## 5.1. Working with the ODEUM CodeJS framework (evolution)
All initial work is done through experiments. The experiments will facilitate and test different JavaScript libraries and technology and create examples to check-out prosumtions and evaluate the viability of different choices made during our hackathons.

## 5.2. Contributors (primary):

- AT:     Andrei Tudor - [at@webhouse.dk](at@webhouse.dk)
- CB:     Christian Broberg - [cb@webhouse.dk](cb@webhouse.dk)
- HH:     Henrik Hansen - [hh@webhouse.dk](hh@webhouse.dk)
- MB:     Mikkel Broberg - [mb@webhouse.dk](mb@webhouse.dk)
- MHK:    Martin Kristiansen - [mhk@webhouse.dk](mhk@webhouse.dk)


## 5.3. Experiments location

- All code experiments must be located in ./experiments/... All experiments should be a full stack Creat-React-App implementation which can be installed seperately from within the experiments own folder
- Only reviewed and refactored code (components and scripts) will be accepted and populated to the main ./src folder

## 5.4. Experiments List

### 5.4.1. Codesplitting / PRPL (codesplitting)
- Experiment title: ./experiments/codesplitting

- We will do some initial research and propose 2-3 different technology paths and architectures.
- The PRPL pattern looks promising. (ServiceWorker, IndexedDB, Web App Install Banners, Web Push Notifications)
- Codesplitting with WebPack

- [Codesplitting with WebPack](https://medium.com/@sejoker/code-splitting-with-webpack-on-the-component-level-ac50748d80de)
- [PRPL pattern with WebPack and React](https://www.slideshare.net/grgur/prpl-pattern-with-webpack-and-react)
- [Dynamic Route Loading](https://github.com/ModusCreateOrg/react-dynamic-route-loading-es6)
- [PRPL pattern](https://www.polymer-project.org/1.0/toolbox/server)
- [PRPL pattern - Google](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
- [How we build Twitter Lite](https://blog.twitter.com/2017/how-we-built-twitter-lite)

### 5.4.2. Framework (framework)
- Experiment title: ./experiments/framework
- Setting up the core app framework in ODEUM CodeJS with React, Routes, Redux and Styled-Components. This means the Playground, Header, Menu, Footer and Workspace components and creating 1-2 App Scene components with routes to populate the workspace with "Hello World" and some REST API GET/PUT stuff. 
- Redux will be used for State Management throughout ODEUM CodeJS (OCJS) and it is a requirement for developers to obtain usable knowledge on how to use Redux in general and with all container/statefull (smart) components.
Read the book, "The Complete Redux Book" it is located in the ./docs/developer/assets/ and check the book code examples here: [Redux Book](https://github.com/redux-book/code-samples)

### 5.4.3. Themes and themable components in ODEUM CodeJS (theme)
- Experiment title: ./experiments/theme
- How to create a dynamic theme in OCJS which can be used for the example app "ThemeBuilder". Themes can be facilitated with <ThemeProvider> from Styled-components (SC).
- Includes production ready <Icon /> component
- [Example of ThemeProvider used in a similar framework](https://github.com/zksailor534/react-adminlte-dash)
- [Grommet - Example of complete design system and framework made in ReactJS](https://grommet.github.io)
- [Ant Design - Yet another UI framework](https://ant.design)
    - Icons
    - Buttons
    - Popup Windows
    - Dropdown (text, color, font, icons, avatars)
    - Group-Avatar (disabled - greyed out)
    - User-Avatar (disabled - greyed out)
    - Panel-lists (header, drag-zone, scrollable, open/close)
    - AppMarket (AppSwitcher)
    - Image Upload (DnD)
    - Color palette viewer/selector
    - Font palette viewer/selector
    - Device Example Renderer (Phone, Tablet, Desktop)
    - Checkbox, Radio button, On/Off
    - Scale (two-sided handles)
    - Editor (WYSIWYG/Code with insertable fields/actions)
    - Date range picker (AirBnb)
    - Language picker (multiselect)
    - Field-Avatar (available/selected)
    - Card (dragable, attachable (menu))
    - Gauge (sizeable, themable)
    - Paginator (Paging og lists and card views)
    - Image Preview (sizeable)
    - Map (pinable, sizeable (fixed/flow), source (Google, OpenStreepMap))
    - Comments (item comments)

### 5.4.4. Footerlabel
- Simple component to print the app title and copyright and include a URL (link) to some external or in-app resource (/about)
- Get data from applegends.js from the theme  

### 5.4.5. Redux Forms (redux-form)
- Experiment with Redux Forms.
- [Redux Forms](http://redux-form.com/)

### 5.4.6. Datagrid/Datatables
- Experiment with lists with large data payloads and footprints
- Dragable / sortable / stylable
- Redux
- [React Virtualized](https://github.com/bvaughn/react-virtualized)
- [React Sortable - Drag and sort lists based upon React Virtualized + react-tiny-virtual-list + react-infinite](https://github.com/clauderic/react-sortable-hoc)
- [Redux Search (same Facebook author as react-virtualized)](https://bvaughn.github.io/redux-search/)

### 5.4.7. React Drag and Drop (react-dnd)
- Experiment to test Dan Abramovs (Redux) React DnD module
- Should be connected to Redux as anything else
- [React DnD](https://react-dnd.github.io/react-dnd/)
- [Tutorial chess sample with Redux](https://github.com/jcolemorrison/react-dnd-redux-example)
- [Sortable/dragable tree](https://fritz-c.github.io/react-sortable-tree/)
- [React Trello Board - Redux/React-DND](https://github.com/web-pal/react-trello-board)

### 5.4.8. WYSIWYG editor (draftjs)
- Experiment with Facebook's editor component Draft.js
- [DraftJS with Redux](https://www.caffeinecoding.com/react-redux-draftjs/)
- [Draft.js in the real world](https://skillsmatter.com/skillscasts/8493-draft-js-in-the-real-world)

### 5.4.9. GraphQL + Redux
- Experiment with GraphQL + Redux
[Implementing GraphQL in your Redux App](https://www.sitepoint.com/rest-2-0-graphql/)
[Example 1](https://github.com/RyanCCollins/corporate-dashboard)

### 5.4.10. Creating NPM packages containing our framework
- This is just an idea that using NPM might be another path to follow for making easier updates to our development of ODEUM CodeJS Apps and deployment builds.
- Which parts if not all can be packaged?
- NPM package naming convention (if not just all in one package)
    - odeum-codejs
    - odeum-connect
    - odeum-api
    - odeum-ui
    - odeum-icons
    - odeum-help
    - odeum-search
    - odeum-messages
    - odeum-notifications
    - odeum-store
    - odeum-login
    - odeum-apps

```js
import App from 'odeum-ui/components/App'
import Icon from 'odeum-ui/components/Icon'
import Tabs from 'odeum-ui/components/Tabs'
```

### 5.4.11. Demo App to Connect to the ODEUM CodeJS framework
- ODEUM CodeJS has a symbiotic connection with the App that uses the framework. The one can not exist without the other. The framework describes how the app can use it, and the app tells the framework how it will use the framework, eg. menuitems (schenes), search items, help items, login, routes (schenes) etc. We need a simple Demo App to test this symbiotic connection. The framework manages the state for the app 

### 5.4.12. Full-screen presentations (COWI/ODEUM Sales Manager/ODEUM Report)
- Experiment with Formidable Spectacle
- [Spectable](http://formidable.com/open-source/spectacle/)
- [Github](https://github.com/FormidableLabs/spectacle)
- [Spectable Boilerplate](https://github.com/FormidableLabs/spectacle-boilerplate)

### 5.4.13. Client State Recorder (CS)
- ODEUM StateRecorder
- A system to remotely record the client app state history (Redux) and send it to a server, so you will be able to time travel the client solution (like Redux Dev Tools) in a support/error finding prespective
- The state history should be stored in a client app database or localstorage with easy submission to the Client State Player (Replay / Time Travel)
- The state recorder shoul be able to record and server store each keystroke and replay this in another client for true "continuity" experience (just like a live chat)
- Check NPM (redux-state-history, redux-dev-tools, redux-test-recorder)

### 5.4.14. Client State Player (Time Travel) (SS)
- ODEUM StatePlayer
- An App that can replay (time travel) any client app's recorde state history and display it in either:
    - Redux Dev Tools
    - Custom Time Travel Player (own React view component)

### 5.4.15. Login
- OAuth experiment up against ODEUM Server

### 5.4.16. REST and components API documentation platform/style
- Research and propose API documentation platform and style

### 5.4.17. REST API implementation experiments
- All available forces

### 5.4.18. IAM - Identity and Access Management
- Global User Registry (odeum.com)
- Experiment is branching the mobile license server model from odeummobile.com out into a Rest API based server 
which will become our global IAM on odeum.com. Today this solution takes "customerID", "userID", 
and "password" to resolve which server to communicate with. 
- In the finalized model all users will only have one account on odeum.com which will resolve to numerous apps and installations (sites). 
- Our own ODEUM CodeJS Apps (clients) will eventually resolve which server to communicate with from odeum.com. ((This is not an ODEUM CodeJS specific experiment)). 

### 5.4.19. ODEUM CodeJS experiments site in production
- How to set up a React website in production in a real world hosting environment. Which webserver to run, NodeJS is probably required, which version, and do we want to use Express web server or Apache? 
- Experiment "framework" is running at www.odeum-codejs.com

### 5.4.20. Deployment
- How to deploy ODEUM CodeJS client updates to different customer clients and locations. We PULL with mandatory pulls for critical errors and minor hotfixes. Large updates is initiated by the client (customer). 

### 5.4.21. JavaScript Style Guide
- We will create a JavaScript Style Guide and linter. 

### 5.4.22. Debugging with Chrome in VS Code
- We need to create a standardized method to setup debugging with Chrome in VS Code on both Mac and Windows PC. 

### 5.4.23. Test setup scenarios
- Setting up and performing automated tests of components and complete framework through CRA.

### 5.4.24. Help Server (Help Items)
- The App platform for displaying context-sensitive helpitems based upon views in scenes. 
- Apps using ODEUM CodeJS can introduce their own helpitems which are displayed by the framework. 
- Helpitems should be indexed and very easy to localize.

### 5.4.25. Responsiveness
With Styled-Components:
- [Grid Styled](http://jxnblk.com/grid-styled/)
- [Grid Styled Github](https://github.com/jxnblk/grid-styled)

### 5.4.26. Search Server
- The App platform for displaying helpitems based upon connected views in scenes and components 
- Apps using ODEUM CodeJS can introduce their own helpitems which are displayed by the framework

### 5.4.27. Filename Refactoring (VSCode Extension)
- A VSCode extension made in NodeJS and follwoing the Microsoft instructions set out here:
- [Extending Visual Studio Code](https://code.visualstudio.com/docs/extensions/overview)

### 5.4.28. ODEUM Slack Service
- Creating a Slack App for posting messages from ODEUM Apps to a team slach channel
- [Slack API](https://api.slack.com)

### 5.4.29. ODEUM CodeJS Tutorial Site
- An App that can display simple markdown files from the ODEUM CodeJS repo and run as a tutorial site
- Convert markdown to HTML
- [Example 1 in React](https://github.com/acdlite/react-remarkable)
- [Example 2 in React](https://github.com/rexxars/react-markdown)
- [Example 1](https://github.com/showdownjs/showdown)
- [Example 2](https://github.com/evilstreak/markdown-js)

# 6. Apps
- The following Apps will be developed with ODEUM CodeJS for the repository examples and/or production.

## 6.1. ThemeBuilder
- Build an App to create a theme for an ODEUM CodeJS App
- Examples of different themes
- Publish theme components to NPM
- Icon components selected runtime through constants from the theme (of available icons)
http://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name

The ThemeBuilder (or an AppChecker) needs to have an available Material Design Icon name checker so you do not overwrite the created constants from the ThemeBuilder with invalid icon names.

## 6.2. HelpBuilder
- Build an App to construct an indexed and localized help file for an App using ODEUM CodeJS and the ODEUM Help Server. App should obviously be multilingual in terms of creating localization of help files 

## 6.3. AppBuilder
- Build an App to invoke a boilerplate to set up scenes (menus) for an app
- Import a theme from ThemeBuilder
- Import help from HelpBuilder
- Import search from Search Server
- Insert developer scene in framework
- Hot Reload in developer mode
- Workspace Page Templates (Design system guidelines - see Grommet templates examples [Grommet templates](https://grommet.github.io/aruba/docs/templates))

## 6.4. ComponentBuilder
- Build an App to construct a JavaScript file with a new component
- Use dropdown menues and checkboxes to select type and default values and innerworkings

## 6.5. GeoCloud2 (GC2) porting
- Support Mapcentia in porting GC2 to ODEUM CodeJS

## 6.6. ODEUM Connect
- Demo of creating and managing a React component as an NPM module + Travis CI deployment

## 6.7. ODEUM Dashboard
- Dashboard for Global User Registry on odeum.com
- Visualizes live and historic stats of active user tokens (login) - User, Timestamps, Site, App
- Kick user
- Chat with user

## 6.8. ODEUM Help Server
- Global Help Index for all connected apps
- Should have own ticketing system (issue tracker)
- Ability to integrate with Slack through ODEUM Slack Service 

## 6.9. ODEUM Search Server
- Global Search Index for all connected apps
- Elastic Search
- Connected to ODEUM Help Server for returning help items 

# 7. Icons
Icons for ODEUM CodeJS will use Material Design (MD) icons.
- [Material Design icons](https://material.io/icons/)

## 7.1. Icons location
- All icons are located in the "theme" experiment and will be included in the ODEUM ThemeBuilder App

# 8. Future Technology ideas

- SS: Server-side
- CS: Client-side

## 8.1. GraphQL
- GraphQL as a REST API wrapper.

## 8.2. Data Branching (SS)
- We need to be able to branch data in our databases so we have the ability to work with "DEVDATA", "TESTDATA" and "PRODDATA" during development, test and production. 
- Users will be able to "check-out/pull" data from the PRODDATA into the DEVDATA or TESTDATA branches and work with our tools on the data from there. When done working with a "record" or "structure" or queries, the user can commit the DEVDATA/TESTDATA data to the PRODDATA branch. 
- The different data-branches need to be accesible to our data-synchronizers in ODEUM Sync Manager (OSM) as well. 

## 8.3. Point of failure:
- When delivering the entire app in one render-blocking package, you might run into JS code loading errors. Don't make JS your app's single point of failure."

## 8.4. Using a failover loader
- The first render should be on the server, and give the user some content if that JS fails to load. The code that loads the “App” (odeum-codejs) container should be an HTML file which loads a container to control whether our JS code is actually running and is accessible on the server. If not, there should be static HTML package loading a temporary app setup displaying the errors and tries to reload the main app container until no errors are reported.

## 8.5. Offline-first approach
- Offline-first – hence treating the network as an enhancement with JS tools like Service Worker and IndexedDB – has become the new standard for building fast, resilient websites. It is possible to do both traditional progressive enhancement and offline-first, but it's not easy. We should prioritize offline-first over works-without-JS."

# 9. Folder Structure Convention

## 9.1. Source files 

## 9.2. Public static source files 
```
/public
/public/index.html
/public/favicon.ico
```

## 9.3. Folder Structure Convention example for ODEUM Report Web App

```javascript
/src/
  /assets/
  /containers/
  /components/
  /scenes/
    /Login/ 
    /Home/
      /scenes/
        /Dashboard/
        /Tasks/
            /containers/
              Smart1/
                /actions/
                  smart1actiontypes.js
                  smart1action.js
                /reducers/
                  smart1reducer.js
                /assets/
                Smart1.js
            /components/
              Dumb1/
                /assets/
                /styles/
                index.js
              Dumb2/
              index.js
            /actions/
            actiontypes.js
            /reducers/
            /styles/
        /Forms/
        /Reports/
        /Organisation/
        /Settings/
        /AddMenu/
        /AppMarket/
  /store/
    store.js
    /reducers/
    combinedreducers.js
  /services/
    /api/
    /geolocation/           
```

# 10. JavaScript and React Style Guide
We will refer to Airbnb's JavaScript style guide which is pretty strict and solid. We will produce an eslintrc.json with all the rules that apply for ODEUM CodeJS. 

## 10.1. Guidelines

- [Airbnb guidelines](https://github.com/airbnb/javascript)
- [Airbnb JSX guidelines](https://github.com/airbnb/javascript/tree/master/react)
- [ESLint rules](http://eslint.org/docs/rules)
- [ESLint react plugin](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
- [Styled Components linter](https://github.com/styled-components/stylelint-processor-styled-components)
- [ESLint, Prettier, Flow](https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213)

## 10.2. PropTypes
It is critical that all component development is declared with PropTypes everywhere possible. PropTypes will work both as typechecking security and as an API overview for other developers on which props the component agregates. 

- [Typechecking with PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

- [Why PropTypes are important](https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/)

## 10.3. Components

### 10.3.1. Stateless components (presentational components)
For stateless class components use PureComponent 

```javascript 
class HavingFun extends React.PureComponent {
	render() {
		return (
            <div>
                <h1>Having fun with Redux</h1>				
            </div>
		)
    }
}

export default HavingFun
``` 

Use stateless functional components (non-class components) whenever possible.  
```javascript
const HelloName = ({name}) => {
    const sayHi = (event) => {
        alert(`Hi ${name}`)        
    }
    return (
            <div>
                <a href="#" onClick={sayHi}>Click me</a>
            </div>
        )
}

export default HelloName


const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
);

export default HelloWorld;
```

### 10.3.2. Stateful components (container components)

```javascript 

```

# 11. Visual Studio Code Extensions
We encourage all ODEUM CodeJS developers to use and facilitate Visual Studio Code (VSCode). VSCode is available for both Windows and Mac

We suggest that you install the following VSCode Extensions to get the optimal environment for your React development and ODUEM CodeJS contribution. 

## 11.1. Atom Keymap
Popular Atom keybindings for Visual Studio Code (by Microsoft)
[Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings)

## 11.2. Babel ES6/ES7
[Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)

## 11.3. Debugger for Chrome
[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

## 11.4. ESLint
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 11.5. NPM Intellisense
[NPM Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

## 11.6. React Native Tools
[React Native Tools](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)

## 11.7. Reactjs code snippets
[Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)

## 11.8. vscode-styled-components
[vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

# 12. ODEUM API
- Location of future ODEUM API (under construction)
- https://api.odeum.com/api/v1/...

# 13. ODEUM 2GO!

ODEUM 2GO is a "Hub" and SaaS cloud service which facilitates hosting and deployment management of Web Apps created with the open source App framework ODEUM CodeJS. ODEUM 2GO is charged with a monthly fee of $XX. 

The Hub facilitates the following services in-a-box:
```
- Login Service Provider
- User Database Manager
- App Database Manager
- Update Manager
- Document Storage (x GB per month)
- Database (x GB per month)
- Themes & Theme Editor (ThemeProvider)
- Hotline and chat support from ODEUM CodeJS developers
```

ODEUM 2GO is designed and build with ODEUM CodeJS

https://www.reindex.io
https://cloud.docker.com
