# 1. Guidelines (Getting started with ODEUM CodeJS)

<!-- TOC -->

- [1. Guidelines (Getting started with ODEUM CodeJS)](#1-guidelines-getting-started-with-odeum-codejs)
- [2. ODEUM CodeJS App Components Reference Guide](#2-odeum-codejs-app-components-reference-guide)
- [3. Experiments (initial developer experiments)](#3-experiments-initial-developer-experiments)
    - [3.1. Contributors (primary):](#31-contributors-primary)
    - [3.2. Experiments location](#32-experiments-location)
    - [3.3. Codesplitting / PRPL (former experiment 1)](#33-codesplitting--prpl-former-experiment-1)
    - [3.4. Redux](#34-redux)
    - [3.5. Framework (former experiment 3.1)](#35-framework-former-experiment-31)
    - [3.6. Demo App to Connect to the ODEUM CodeJS framework](#36-demo-app-to-connect-to-the-odeum-codejs-framework)
    - [3.7. Login](#37-login)
    - [3.8. REST and components API documentation platform/style](#38-rest-and-components-api-documentation-platformstyle)
    - [3.9. REST API implementation experiments](#39-rest-api-implementation-experiments)
    - [3.10. IAM - Identity and Access Management](#310-iam---identity-and-access-management)
    - [3.11. ODEUM CodeJS experiments site in production](#311-odeum-codejs-experiments-site-in-production)
    - [3.12. Deployment](#312-deployment)
    - [3.13. Naming Conventions](#313-naming-conventions)
    - [3.14. JavaScript Style Guide](#314-javascript-style-guide)
    - [3.15. Debugging with Chrome in VS Code](#315-debugging-with-chrome-in-vs-code)
    - [3.16. Test setup scenarios](#316-test-setup-scenarios)
    - [3.17. Themes in ODEUM CodeJS (former experiment 16)](#317-themes-in-odeum-codejs-former-experiment-16)
    - [3.18. Help Server (Help Items)](#318-help-server-help-items)
    - [3.19. Menu](#319-menu)
    - [3.20. Responsiveness](#320-responsiveness)
    - [3.21. Search Server](#321-search-server)
- [4. Example Apps](#4-example-apps)
    - [4.1. ThemeBuilder](#41-themebuilder)
    - [4.2. HelpBuilder](#42-helpbuilder)
    - [4.3. AppBuilder](#43-appbuilder)
    - [4.4. ComponentBuilder](#44-componentbuilder)
    - [4.5. Geocloud2 porting](#45-geocloud2-porting)
    - [4.6. ODEUM Connect](#46-odeum-connect)
    - [4.7. ODEUM Dashboard](#47-odeum-dashboard)
    - [4.8. ODEUM Help Server](#48-odeum-help-server)
    - [4.9. ODEUM Search Server](#49-odeum-search-server)
- [5. Icons](#5-icons)
    - [5.1. Login popup](#51-login-popup)
    - [5.2. Playground](#52-playground)
    - [5.3. Misc](#53-misc)
    - [5.4. Fields](#54-fields)
- [6. Future Technology ideas](#6-future-technology-ideas)
    - [6.1. GraphQL](#61-graphql)
    - [6.2. State Recorder (Time Travel) (SS/CS)](#62-state-recorder-time-travel-sscs)
    - [6.3. Data Branching (SS)](#63-data-branching-ss)
    - [6.4. Point of failure:](#64-point-of-failure)
    - [6.5. Using a failover loader](#65-using-a-failover-loader)
    - [6.6. Offline-first approach](#66-offline-first-approach)
- [7. Folder Structure Convention](#7-folder-structure-convention)
    - [7.1. Source files](#71-source-files)
    - [7.2. Public static source files](#72-public-static-source-files)
    - [7.3. Folder Structure Convention example for ODEUM Report Web App](#73-folder-structure-convention-example-for-odeum-report-web-app)
- [8. JavaScript and React Style Guide](#8-javascript-and-react-style-guide)
    - [8.1. Inspiration](#81-inspiration)
    - [8.2. PropTypes](#82-proptypes)
    - [8.3. Components](#83-components)
        - [8.3.1. Stateless components (presentational components)](#831-stateless-components-presentational-components)
        - [8.3.2. Stateful components (container components)](#832-stateful-components-container-components)
- [9. Visual Studio Code Extensions](#9-visual-studio-code-extensions)
    - [9.1. Extension 1](#91-extension-1)
- [10. ODEUM API](#10-odeum-api)
- [11. ODEUM 2GO!](#11-odeum-2go)

<!-- /TOC -->

# 2. ODEUM CodeJS App Components Reference Guide

- All decomposed and architected App Components are listed and explained in a Microsoft Word document you can find here: [AppComponents.docx](/docs/AppComponents.docx)

# 3. Experiments (initial developer experiments)

## 3.1. Contributors (primary):

- HH:     Henrik Hansen - [hh@webhouse.dk](hh@webhouse.dk)
- AT:     Andrei Tudor - [at@webhouse.dk](at@webhouse.dk)
- MB:     Mikkel Broberg - [mb@webhouse.dk](mb@webhouse.dk)
- MHK:    Martin Kristiansen - [mhk@webhouse.dk](mhk@webhouse.dk)
- CB:     Christian Broberg - [cb@webhouse.dk](cb@webhouse.dk)

## 3.2. Experiments location

- All code experiments must be located in ./experiments/... All experiments should be a full stack Creat-React-App implementation which can be installed seperately from within the experiments own folder
- Only reviewed and refactored code (components and scripts) will be accepted and populated to the main ./src folder

## 3.3. Codesplitting / PRPL (former experiment 1)
- We will do some initial research and propose 2-3 different technology paths and architectures.
- The PRPL pattern looks promising. (ServiceWorker, IndexedDB, Web App Install Banners, Web Push Notifications)
- Codesplitting with WebPack

- [Codesplitting with WebPack](https://medium.com/@sejoker/code-splitting-with-webpack-on-the-component-level-ac50748d80de)
- [PRPL pattern with WebPack and React](https://www.slideshare.net/grgur/prpl-pattern-with-webpack-and-react)
- [Dynamic Route Loading](https://github.com/ModusCreateOrg/react-dynamic-route-loading-es6)
- [PRPL pattern](https://www.polymer-project.org/1.0/toolbox/server)
- [PRPL pattern - Google](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
- [How we build Twitter Lite](https://blog.twitter.com/2017/how-we-built-twitter-lite)

## 3.4. Redux
- Redux will be used for State Management throughout ODEUM CodeJS (OCJS) and it is a requirement for developers to obtain usable knowledge on how to use Redux in general and with all container/statefull (smart) components.
Read the book, "The Complete Redux Book" it is located in the ./docs/developer/assets/ and check the book code examples here: [Redux Book](https://github.com/redux-book/code-samples)

## 3.5. Framework (former experiment 3.1)
- Setting up the core app framework in ODEUM CodeJS with React, Routes, Redux and Styled-Components. This means the Playground, Header, Menu, Footer and Workspace components and creating 1-2 App Scene components with routes to populate the workspace with "Hello World" and some REST API GET/PUT stuff. 

## 3.6. Demo App to Connect to the ODEUM CodeJS framework
- ODEUM CodeJS has a symbiotic connection with the App that uses the framework. The one can not exist without the other. The framework describes how the app can use it, and the app tells the framework how it will use the framework, eg. menuitems, helpitems, login, routes etc. We need a simple Demo App to test this symbiotic connection. Who manages the state (Redux store, the framework or the app? 

## 3.7. Login
- OAuth experiment up against ODEUM Server

## 3.8. REST and components API documentation platform/style
- Research and propose API documentation platform and style

## 3.9. REST API implementation experiments
- All available forces

## 3.10. IAM - Identity and Access Management
- Global User Registry (odeum.com)
- Experiment is branching the mobile license server model from odeummobile.com out into a Rest API based server 
which will become our global IAM on odeum.com. Today this solution takes "customerID", "userID", 
and "password" to resolve which server to communicate with. 
- In the finalized model all users will only have one account on odeum.com which will resolve to numerous apps and installations (sites). 
- Our own ODEUM CodeJS Apps (clients) will eventually resolve which server to communicate with from odeum.com. ((This is not an ODEUM CodeJS specific experiment)). 

## 3.11. ODEUM CodeJS experiments site in production
- How to set up a React website in production in a real world hosting environment. Which webserver to run, NodeJS is probably required, which version, and do we want to use Express web server or Apache? 

## 3.12. Deployment
- How to deploy ODEUM CodeJS client updates to different customer clients and locations. We PULL with mandatory pulls for critical errors and minor hotfixes. Large updates is initiated by the client (customer). 

## 3.13. Naming Conventions
- CB will be in charge of all naming conventions so refactoring can be at a minimum for later stages with more active contributors. If in doubt on what to call ANYTHING, ask CB. The AppComponents Word document located in /docs/AppComponents.docx will introduce component naming until further API documentation has been defined

## 3.14. JavaScript Style Guide
- We will create a JavaScript Style Guide and linter. 

## 3.15. Debugging with Chrome in VS Code
- We need to create a standardized method to setup debugging with Chrome in VS Code on both Mac and Windows PC. 

## 3.16. Test setup scenarios
- Setting up and performing automated tests of components and complete framework through CRA.

## 3.17. Themes in ODEUM CodeJS (former experiment 16)
- How to create a dynamic theme in OCJS which can be used for the example app "ThemeBuilder". Themes can be facilitated with <ThemeProvider> from Styled-components (SC).

## 3.18. Help Server (Help Items)
- The App platform for displaying context-sensitive helpitems based upon views in scenes. 
- Apps using ODEUM CodeJS can introduce their own helpitems which are displayed by the framework. 
- Helpitems should be indexed and very easy to localize.

## 3.19. Menu
- Find suitable React based menu component (JQuery free thanks) that can be styled with SC and redux'ed.

## 3.20. Responsiveness
With Styled-Components:
- http://jxnblk.com/grid-styled/ 
- https://github.com/jxnblk/grid-styled

## 3.21. Search Server
- The App platform for displaying helpitems based upon connected views in scenes and components 
- Apps using ODEUM CodeJS can introduce their own helpitems which are displayed by the framework

# 4. Example Apps
- The following Apps will be developed with ODEUM CodeJS for the repository examples.

## 4.1. ThemeBuilder
- Build an App to create a theme for an ODEUM CodeJS App
- Examples of different themes
- Publish theme components to NPM

## 4.2. HelpBuilder
- Build an App to construct an indexed and localized help file for an App using ODEUM CodeJS. App should obviously be multilingual in terms of creating localization of help files 

## 4.3. AppBuilder
- Build an App to invoke a boilerplate to set up scenes (menus) for an app
- Import a theme from ThemeBuilder
- Import help from HelpBuilder
- Import search from Search Server
- Insert developer scene in framework

## 4.4. ComponentBuilder
- Build an App to construct a JavaScript file with a new component
- Use dropdown menues and checkboxes to select type and default values and innerworkings

## 4.5. Geocloud2 porting
- Support Mapcentia in porting GC2 to ODEUM CodeJS

## 4.6. ODEUM Connect
- Demo of creating and managing a React component as an NPM module + Travis CI deployment

## 4.7. ODEUM Dashboard
- Dashboard for Global User Registry on odeum.com
- Visualizes live and historic stats of active user tokens (login) - User, Timestamps, Site, App
- Kick user
- Chat with user

## 4.8. ODEUM Help Server
- Global Help Index for all connected apps

## 4.9. ODEUM Search Server
- Global Search Index for all connected apps
- Elastic Search
- Connected to ODEUM Help Server for returning help items 

# 5. Icons
Icons for ODEUM CodeJS will use Material Design (MD) icons.
- [Material Design icons](https://material.io/icons/)

## 5.1. Login popup
- lock outline
- lock open
- close
- check circle / check

## 5.2. Playground

- search
- notifications
- keyboard arrow down
- menu
- chat
- home / dashboard
- assignment 
- assignment turned in
- people
- settings
- cloud / apps 
- help 
- info (Generel)
- input (Fields)
- timeline (Workflow)
- people (Users)
- code (Actions)
- settings application (Settings)
- opacity / camera (Design)
- language (language)
- date range (period)
- check circle (save)
- cancel (cancel)
- mode edit (edit)
- add circle (add field)
- delete forever (trashcan/delete)
- content copy (copy field)

## 5.3. Misc

- cloud download
- cloud upload
- group
- group add
- person
- person add
- assignment (task type)
- code (HTML/CSS)
- mail outline (Notification settings)
- settings cell
- extension (integration)
- arrow drop down
- arrow drop up
- copyright (Footer)
- place (check-in)
- phone (phone)
- date range (date range)
- visibility
- visibility off
- add circle outline
- account box (account)
- insert drive file (document)
- view headline
- view module
- share
- favorite
- favorite border
- label / label outline
- star rate
- stars
- today (view calendar)
- play circle filled
- play circle outline (adjust)
- skip next
- skip previous
- pie chart / pie chart outlined
- show chart (line)
- insert chart / equalizer (stacks)
- web asset (New from empty)
- web (New from template)
- tablet mac
- laptop mac
- desktop mac
- phone iphone

## 5.4. Fields

- photo camera
- short text
- event
- place
- list
- person
- work 
- access time (time)
- mic / keyboard voice (voice)
- videocam
- call (phonenumber)
- mail outline
- message (large text)
- filter list (reference table)
- attach file (file)
- directions (route)
- mood (smileys)
- check box
- radio button checked
- star rate (rating)
- grid on (table - )

# 6. Future Technology ideas

- SS: Server-side
- CS: Client-side

## 6.1. GraphQL
- GraphQL as a REST API wrapper.

## 6.2. State Recorder (Time Travel) (SS/CS)
- A system to remotely record the client app state history so you will be able to time travel the client solution in a support/error finding prespective
- The state history should be stored in a client app database

- Check NPM (redux-state-history, redux-dev-tools, redux-test-recorder)

## 6.3. Data Branching (SS)
- We need to be able to branch data in our databases so we have the ability to work with "DEVDATA", "TESTDATA" and "PRODDATA" during development, test and production. 
- Users will be able to "check-out/pull" data from the PRODDATA into the DEVDATA or TESTDATA branches and work with our tools on the data from there. When done working with a "record" or "structure" or queries, the user can commit the DEVDATA/TESTDATA data to the PRODDATA branch. 
- The different data-branches need to be accesible to our data-synchronizers in ODEUM Sync Manager (OSM) as well. 

## 6.4. Point of failure:
- When delivering the entire app in one render-blocking package, you might run into JS code loading errors. Don't make JS your app's single point of failure."

## 6.5. Using a failover loader
- The first render should be on the server, and give the user some content if that JS fails to load. The code that loads the “App” (odeum-codejs) container should be an HTML file which loads a container to control whether our JS code is actually running and is accessible on the server. If not, there should be static HTML package loading a temporary app setup displaying the errors and tries to reload the main app container until no errors are reported.

## 6.6. Offline-first approach
- Offline-first – hence treating the network as an enhancement with JS tools like Service Worker and IndexedDB – has become the new standard for building fast, resilient websites. It is possible to do both traditional progressive enhancement and offline-first, but it's not easy. We should prioritize offline-first over works-without-JS."

# 7. Folder Structure Convention

## 7.1. Source files 

## 7.2. Public static source files 
```
/public
/public/index.html
/public/favicon.ico
```

## 7.3. Folder Structure Convention example for ODEUM Report Web App

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

# 8. JavaScript and React Style Guide
We will try to refer to Airbnb's style guide which is pretty strict and solid. We will produce an eslintrc with all the rules that apply for ODEUM CodeJS. 

## 8.1. Inspiration

* https://github.com/airbnb/javascript 
* http://eslint.org/docs/rules
* https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
* https://github.com/styled-components/stylelint-processor-styled-components

## 8.2. PropTypes
It is critical that all component development is declared with PropTypes everywhere possible. PropTypes will work both as typechecking security and as an API overview for other developers on which props the component agregates. 

https://facebook.github.io/react/docs/typechecking-with-proptypes.html

https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/

## 8.3. Components

### 8.3.1. Stateless components (presentational components)
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

### 8.3.2. Stateful components (container components)

```javascript 

```

# 9. Visual Studio Code Extensions

## 9.1. Extension 1

# 10. ODEUM API

- https://api.odeum.com/api/v1/...

# 11. ODEUM 2GO!

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
