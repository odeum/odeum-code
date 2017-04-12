# Experiments (initial developer experiments)

## Contributors:
- HH:     Henrik Hansen - <a href="mailto:hh@webhouse.dk" target="_blank">hh@webhouse.dk</a>
- AT:     Andrei Tudor - <a href="mailto:at@webhouse.dk" target="_blank">at@webhouse.dk</a>
- MB:     Mikkel Broberg - <a href="mailto:mb@webhouse.dk" target="_blank">mb@webhouse.dk</a>
- MHK:    Martin Kristiansen - <a href="mailto:mhk@webhouse.dk" target="_blank">mhk@webhouse.dk</a>
- CB:     Christian Broberg - <a href="mailto:cb@webhouse.dk" target="_blank">cb@webhouse.dk</a>

### Experiments location
- All code experiments must be located in ./experiments/... 
- Only code reviewed and accepted components and scripts will be populated to ./src folder


## Codesplitting / routing (IDLE)
Should React be used from a CDN or is it preferable to use it inline?
We will do some initial research and propose 2-3 different technology paths and architectures.
The PRPL pattern looks promising. (ServiceWorker, IndexedDB, Web App Install Banners, Web Push Notifications)

``` 
https://www.slideshare.net/grgur/prpl-pattern-with-webpack-and-react

https://github.com/ModusCreateOrg/react-dynamic-route-loading-es6

https://www.polymer-project.org/1.0/toolbox/server

https://developers.google.com/web/fundamentals/performance/prpl-pattern/

https://blog.twitter.com/2017/how-we-built-twitter-lite

``` 

## Redux
Redux will be used for State Management throughout ODEUM CodeJS and it is a requirement for developers to obtain usable knowledge on how to use Redux in general and with all container/statefull (smart) components.
Read the book, "The Complete Redux Book" it is located in the ./docs/developer folder and check the book code examples here:
https://github.com/redux-book/code-samples

## General Component App framework (DOING)
MB + AT (real code) + CB (pseudo code)
Experiment is setting up the core app framework in ODEUM CodeJS with Routes, Redux and Styled-Components. This means the Playground, Header, MenuPanel, Footer and Workspace components and creating 1-2 App Scene components with routes to populate the workspace with "Hello World" and some REST API GET/PUT stuff. 

## Demo App to Connect to the ODEUM CodeJS framework
ODEUM CodeJS has a symbiotic connection with the App that uses the framework. The one can not exist without the other. The framework describes how the app can use it, and the app tells the framework how it will use the framework, eg. menuitems, helpitems, login, routes etc. We need a simple Demo App to test this symbiotic connection. Who manages the state (Redux store, the framework or the app? 

## Login
MHK will build the first OAuth experiment up against ODEUM Server

## REST and components API documentation platform/style
CB will research and propose API documentation platform and style

## Global User Registry (odeum.com)
HH + MHK
Experiment is branching the mobile license server model from odeummobile.com out into a Rest API based server 
which will become the "Global User Registry" on odeum.com. Today this solution takes "customerID", "userID", 
and "password" to resolve which server to communicate with. In the finalized model all users will only have one account on odeum.com which will resolve to numerous apps and installations (sites). ODEUM CodeJS Apps (clients) will eventually resolve which server to communicate with from odeum.com. ((This is not an ODEUM CodeJS specific experiment)). 

## Tabs with Styled-Components (IN ALPHA)
AT:
Experiment with React Component boilerplate for Tabs in the workspace. Tabs are the main control for all App Scenes.
Components must be styled with Styled-Components to see if CSS with Styled-Components is a suitable path for ODEUM CodeJS.

## ODEUM CodeJS experiments site in production
How to set up a React website in production in a real world hosting environment. Which webserver to run, NodeJS is probably required, which version, and do we want to use Express web server or Apache? 

## Deployment
How to deploy ODEUM CodeJS client updates to different customer clients and locations. We PULL with mandatory pulls for critical errors and minor hotfixes. Large updates is initiated by the client (customer). 

## Naming Conventions
CB will be in charge of all naming conventions so refactoring can be at a minimum for later stages with more active contributors. If in doubt on what to call ANYTHING, ask CB. The AppComponents Word document located in /docs/AppComponents.docx will introduce component naming until further API documentation has been defined

## JavaScript Style Guide
As proposed in the Guidelines we will create a JavaScript Style Guide and linter based upon Airbnb's guidance. 

## Debugging with Chrome in VS Code
We need to create a boilerplate method to setup debugging with Chrome in VS Code. 

## Test setup scenarios
Setting up and performing automated tests of components and complete framework