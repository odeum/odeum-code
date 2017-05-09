# 1. Workpackages (experiments, examples, real world)

<!-- TOC -->

- [1. Workpackages (experiments, examples, real world)](#1-workpackages-experiments-examples-real-world)
- [2. Experiments (initial developer experiments)](#2-experiments-initial-developer-experiments)
    - [2.1. Contributors (primary):](#21-contributors-primary)
        - [2.1.1. Experiments location](#211-experiments-location)
    - [2.2. Codesplitting / PRPL](#22-codesplitting--prpl)
    - [2.3. Redux](#23-redux)
    - [2.4. Basic Framework (Experiment 3.1)](#24-basic-framework-experiment-31)
    - [2.5. Demo App to Connect to the ODEUM CodeJS framework](#25-demo-app-to-connect-to-the-odeum-codejs-framework)
    - [2.6. Login](#26-login)
    - [2.7. REST and components API documentation platform/style](#27-rest-and-components-api-documentation-platformstyle)
    - [2.8. REST API implementation experiments](#28-rest-api-implementation-experiments)
    - [2.9. IAM - Identity and Access Management](#29-iam---identity-and-access-management)
    - [2.10. Tabs with Styled-Components (IN ALPHA)](#210-tabs-with-styled-components-in-alpha)
    - [2.11. ODEUM CodeJS experiments site in production](#211-odeum-codejs-experiments-site-in-production)
    - [2.12. Deployment](#212-deployment)
    - [2.13. Naming Conventions](#213-naming-conventions)
    - [2.14. JavaScript Style Guide](#214-javascript-style-guide)
    - [2.15. Debugging with Chrome in VS Code](#215-debugging-with-chrome-in-vs-code)
    - [2.16. Test setup scenarios](#216-test-setup-scenarios)
    - [2.17. Themes in ODEUM CodeJS](#217-themes-in-odeum-codejs)
    - [2.18. Help Server (Help Items)](#218-help-server-help-items)
    - [2.19. Menu](#219-menu)
    - [2.20. Responsiveness](#220-responsiveness)
    - [2.21. Search Server](#221-search-server)
- [3. Example Apps](#3-example-apps)
    - [3.1. ThemeBuilder (P)](#31-themebuilder-p)
    - [3.2. HelpBuilder (P)](#32-helpbuilder-p)
    - [3.3. AppBuilder (P)](#33-appbuilder-p)
    - [3.4. ComponentBuilder (P)](#34-componentbuilder-p)
    - [3.5. Geocloud2 porting](#35-geocloud2-porting)
    - [3.6. ODEUM Connect**](#36-odeum-connect)
    - [3.7. ODEUM Dashboard (P)](#37-odeum-dashboard-p)
    - [3.8. ODEUM Help Server (P)](#38-odeum-help-server-p)
    - [3.9. ODEUM Search Server (P)](#39-odeum-search-server-p)
- [4. Future Technology for ODEUM CodeJS](#4-future-technology-for-odeum-codejs)
    - [4.1. Relay + GraphQL](#41-relay--graphql)
    - [4.2. State Recorder (Time Travel) (SS/CS)](#42-state-recorder-time-travel-sscs)
    - [4.3. Data Branching (SS)](#43-data-branching-ss)
    - [4.4. Point of failure:](#44-point-of-failure)
    - [4.5. Using a failover loader](#45-using-a-failover-loader)
    - [4.6. Offline-first approach](#46-offline-first-approach)

<!-- /TOC -->

# 2. Experiments (initial developer experiments)


## 2.1. Contributors (primary):

- HH:     Henrik Hansen - [hh@webhouse.dk](hh@webhouse.dk)
- AT:     Andrei Tudor - [at@webhouse.dk](at@webhouse.dk)
- MB:     Mikkel Broberg - [mb@webhouse.dk](mb@webhouse.dk)
- MHK:    Martin Kristiansen - [mhk@webhouse.dk](mhk@webhouse.dk)
- CB:     Christian Broberg - [cb@webhouse.dk](cb@webhouse.dk)

### 2.1.1. Experiments location

- All code experiments must be located in ./experiments/... All experiments should be a full stack Creat-React-App implementation which can be installed seperately from within the experiments own folder
- Only reviewed and refactored code (components and scripts) will be accepted and populated to the main ./src folder

## 2.2. Codesplitting / PRPL
Should React be used from a CDN or is it preferable to use it inline?
We will do some initial research and propose 2-3 different technology paths and architectures.
The PRPL pattern looks promising. (ServiceWorker, IndexedDB, Web App Install Banners, Web Push Notifications)
Codesplitting with WebPack

[Codesplitting with WebPack](https://medium.com/@sejoker/code-splitting-with-webpack-on-the-component-level-ac50748d80de)
[PRPL pattern with WebPack and React](https://www.slideshare.net/grgur/prpl-pattern-with-webpack-and-react)
[Dynamic Route Loading](https://github.com/ModusCreateOrg/react-dynamic-route-loading-es6)
[PRPL pattern](https://www.polymer-project.org/1.0/toolbox/server)
[PRPL pattern - Google](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
[How we build Twitter Lite](https://blog.twitter.com/2017/how-we-built-twitter-lite)

## 2.3. Redux
Redux will be used for State Management throughout ODEUM CodeJS (OCJS) and it is a requirement for developers to obtain usable knowledge on how to use Redux in general and with all container/statefull (smart) components.
Read the book, "The Complete Redux Book" it is located in the ./docs/developer/assets/ folder and check the book code examples here:
[Redux Book](https://github.com/redux-book/code-samples)

## 2.4. Basic Framework (Experiment 3.1)
Setting up the core app framework in ODEUM CodeJS with React, Routes, Redux and Styled-Components. This means the Playground, Header, Menu, Footer and Workspace components and creating 1-2 App Scene components with routes to populate the workspace with "Hello World" and some REST API GET/PUT stuff. 

## 2.5. Demo App to Connect to the ODEUM CodeJS framework
ODEUM CodeJS has a symbiotic connection with the App that uses the framework. The one can not exist without the other. The framework describes how the app can use it, and the app tells the framework how it will use the framework, eg. menuitems, helpitems, login, routes etc. We need a simple Demo App to test this symbiotic connection. Who manages the state (Redux store, the framework or the app? 

## 2.6. Login
MHK will build the first OAuth experiment up against ODEUM Server

## 2.7. REST and components API documentation platform/style
CB will research and propose API documentation platform and style

## 2.8. REST API implementation experiments
All available forces

## 2.9. IAM - Identity and Access Management
- Global User Registry (odeum.com)
HH + MHK
Experiment is branching the mobile license server model from odeummobile.com out into a Rest API based server 
which will become our global IAM on odeum.com. Today this solution takes "customerID", "userID", 
and "password" to resolve which server to communicate with. In the finalized model all users will only have one account on odeum.com which will resolve to numerous apps and installations (sites). Our own ODEUM CodeJS Apps (clients) will eventually resolve which server to communicate with from odeum.com. ((This is not an ODEUM CodeJS specific experiment)). 

## 2.10. Tabs with Styled-Components (IN ALPHA)
AT:
Experiment with React Component boilerplate for Tabs in the workspace. Tabs are the main control for all App Scenes.
Components must be styled with Styled-Components to see if CSS with Styled-Components is a suitable path for ODEUM CodeJS.

## 2.11. ODEUM CodeJS experiments site in production
How to set up a React website in production in a real world hosting environment. Which webserver to run, NodeJS is probably required, which version, and do we want to use Express web server or Apache? 

## 2.12. Deployment
How to deploy ODEUM CodeJS client updates to different customer clients and locations. We PULL with mandatory pulls for critical errors and minor hotfixes. Large updates is initiated by the client (customer). 

## 2.13. Naming Conventions
CB will be in charge of all naming conventions so refactoring can be at a minimum for later stages with more active contributors. If in doubt on what to call ANYTHING, ask CB. The AppComponents Word document located in /docs/AppComponents.docx will introduce component naming until further API documentation has been defined

## 2.14. JavaScript Style Guide
As proposed in the Guidelines we will create a JavaScript Style Guide and linter. 

## 2.15. Debugging with Chrome in VS Code
We need to create a boilerplate method to setup debugging with Chrome in VS Code on both Mac and Windows PC. 

## 2.16. Test setup scenarios
Setting up and performing automated tests of components and complete framework through CRA.

## 2.17. Themes in ODEUM CodeJS
How to create a dynamic theme in OCJS which can be used for the example app "ThemeBuilder". Themes can be facilitated with <ThemeProvider> from Styled-components (SC).

## 2.18. Help Server (Help Items)
The App platform for displaying context-sensitive helpitems based upon views in scenes. 
Apps using ODEUM CodeJS can introduce their own helpitems which are displayed by the framework. Helpitems should be indexed and very easy to localize.

## 2.19. Menu
Find suitable React based menu component (JQuery free thanks) that can be styled with SC and redux'ed.

Semantic UI:
http://react.semantic-ui.com/introduction
https://www.youtube.com/watch?v=5Bytq6LNDO4
https://github.com/styled-components/styled-components/issues/501

Other stuff:
https://github.com/atom2ueki/react-drawer
http://jsfiddle.net/agongdai/kb3gN/16072/
http://stackoverflow.com/questions/40320410/how-to-make-a-drawer-like-in-google-inbox-with-material-ui
http://codepen.io/ianmcnally/pen/YXXxMy

## 2.20. Responsiveness
With Styled-Components:
- http://jxnblk.com/grid-styled/ 
- https://github.com/jxnblk/grid-styled

## 2.21. Search Server
The App platform for displaying context-sensitive helpitems based upon views in scenes. 
Apps using ODEUM CodeJS can introduce their own helpitems which are displayed by the framework. Helpitems should be indexed and very easy to localize.

# 3. Example Apps
The following Apps will be developed with ODEUM CodeJS for the repository examples (E) or production (P).

## 3.1. ThemeBuilder (P)
- Build an App to create a theme for an ODEUM CodeJS App
- Examples of different themes
- Publish theme components to NPM

## 3.2. HelpBuilder (P)
- Build an App to construct an indexed and localized help file for an App using ODEUM CodeJS. App should obviously be multilingual in terms of creating localization of help files 

## 3.3. AppBuilder (P)
- Build an App to invoke a boilerplate to set up scenes (menus) for an app
- Import a theme from ThemeBuilder
- Insert developer scene in framework

## 3.4. ComponentBuilder (P)
- Build an App to construct a JavaScript file with a new component
- Use dropdown menues and checkboxes to select type and default values and innerworkings

## 3.5. Geocloud2 porting
- Support Mapcentia in porting GC2 to ODEUM CodeJS

## 3.6. ODEUM Connect**
- Demo of creating and managing a React component as an NPM module + Travis CI deployment

## 3.7. ODEUM Dashboard (P)
- Dashboard for Global User Registry on odeum.com
- Visualizes live and historic stats of active user tokens (login) - User, Timestamps, Site, App
- Kick user
- Chat with user

## 3.8. ODEUM Help Server (P)  
- Global Help Index for all connected apps

## 3.9. ODEUM Search Server (P)    
- Global Search Index for all connected apps
- Elastic Search
- Connected to ODEUM Help Server for returning help items 

# 4. Future Technology for ODEUM CodeJS

SS: Server-side
CS: Client-side

## 4.1. Relay + GraphQL
Is a possibility to use instead of Redux and Actions (services) to get and store data and manage state. 

## 4.2. State Recorder (Time Travel) (SS/CS)
A system to remotely record the client app state history so you will be able to time travel the client solution in a support/error finding prespective. The state history should be stored in a client app database. 

Check NPM (redux-state-history, redux-dev-tools, redux-test-recorder)

## 4.3. Data Branching (SS)
We need to be able to branch data in our databases so we have the ability to work with "DEVDATA", "TESTDATA" and "PRODDATA" during development, test and production. Users will be able to "check-out/pull" data from the PRODDATA into the DEVDATA or TRSTDATA branches and work with our tools on the data from there. When done working with a "record" or "structure" or queries, the user can commit the DEVDATA/TESTDATA data to the PRODDATA branch. The different data-branches need to be accesible to our data-synchronizers in ODEUM Sync Manager (OSM) as well. 

## 4.4. Point of failure:
When delivering the entire app in one render-blocking package, you might run into JS code loading errors. Don't make JS your app's single point of failure."

## 4.5. Using a failover loader
The first render should be on the server, and give the user some content if that JS fails to load. The code that loads the “App” (odeum-codejs) container should be an HTML file which loads a container to control whether our JS code is actually running and is accessible on the server. If not, there should be static HTML package loading a temporary app setup displaying the errors and tries to reload the main app container until no errors are reported.

## 4.6. Offline-first approach
Offline-first – hence treating the network as an enhancement with JS tools like Service Worker and IndexedDB – has become the new standard for building fast, resilient websites. It is possible to do both traditional progressive enhancement and offline-first, but it's not easy. We should prioritize offline-first over works-without-JS."
