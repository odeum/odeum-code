# Experiments (initial developer experiments)

Contributors:
HH:     Henrik Hansen - hh@webhouse.dk
AT:     Andrei Tudor - andrei@webhouse.dk
MB:     Mikkel Broberg - mb@webhouse.dk
MHK:    Martin Kristiansen - mhk@webhouse.dk
CB:     Christian Broberg - cb@webhouse.dk

## 1: Codesplitting / routing (IDLE)
Should React be used from a CDN or is it preferable to use it inline?
WeB will do some initial research and propose 2-3 different technology paths. 

## 2: Component App framework (DOING)
MB + AT (real code) + CB (pseudo code)
Experiment is setting up the core app framework in ODEUM CodeJS with Routes, Redux and Styled-Components. This means the Playground, Header, MenuPanel, Footer and Workspace components and creating 1-2 App Scene components with routes to populate the workspace with "Hello World" and some REST API GET/PUT stuff. 

## 3: Login
MHK will build the first OAuth experiment up against ODEUM Server

## 4: Rest API documentation platform/style
CB will research and propose API documentation platform and style

## 5: Branch odeummobile.com 
HH + MHK
Experiment is branching the license server in odeummobile.com out into a Rest API based server 
which will become the "Global User Registry" on odeum.com. Today this solution takes "customerID", "userID", 
and "password" to resolve which server to communicate with. In the finalized model all users will only have one account on odeum.com which will resolve to numerous apps and installations (sites). ODEUM CodeJS Apps (clients) will eventually resolve which server to communicate with from odeum.com. This is not a ODEUM CodeJS specific experiment. 

## 6: Tabs with Styled-Components
AT:
Experiment with React Component boilerplate for Tabs in the workspace. Tabs are the main control for all App Scenes.
Components must be styled with Styled-Components to see if CSS with Styled-Components is a suitable path for ODEUM CodeJS.

## 7: Github and versioning
AT:
Experiment with, how to tag (label) different versions of experiments in which branches. For now we only have the MASTER, Dev/Alpha and Dev/Beta branches. 

## 8: ODEUM CodeJS experiments site in production
How to set up a React website in production in a real world hosting environment. Which webserver to run, NodeJS is probably required, which version, and do we want to use Express web server or Apache? 

## 9: Deployment
How to deploy updates to different customer servers and locations. We PULL with mandatory pulls for critical errors and minor hotfixes. Large updates is initiated by the client (customer). 

## 10: Naming Conventions
CB will be in charge of all naming conventions so refactoring can be at a minimum for later stages with more active contributors. If in doubt on what to cal ANYTHING, ask CB. The AppComponents Word document located in /docs/AppComponents.docx will introduce component naming until further API documentation has been defined


