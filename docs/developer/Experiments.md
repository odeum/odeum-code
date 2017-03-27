# Experiments (initial developer experiments)

## 1: Codesplitting / routing
CB
Should React be used from a CDN or is it preferable to use it inline?
CB will do some initial research and propose 2-3 different technology paths

## 2: Component App framework
MB (real code) + CB (pseudo code)
Experiment is setting up the core app framework in ODEUM CodeJS. This means the Header, MenuPanel, Footer and Workspace components and creating 1 App Scene component to populate the workspace with "Hello World". 

## 3: Login
TBA

## 4: Rest API documentation platform/style
CB

## 5: Branch odeummobile.com 
HH + MHK
Experiment is branching the license server in odeummobile.com out into a Rest API based server 
which will become the "Global User Registry" on odeum.com. Today this solution takes "customerID", "userID", 
and "password" to resolve which server to communicate with. In the finalized model all users will only have one account on odeum.com which will resolve to numerous apps and installations (sites). ODEUM CodeJS Apps (clients) will eventually resolve which server to communicate with from odeum.com. 

## 6: Tabs with Styled-Components
AT:
Experiment with React Component boilerplate for Tabs in the workspace. Tabs are the main control for all App Scenes.
Components should be styled with Styled-Components to see if CSS with Styled-Components is a suitable path for ODEUM CodeJS.

## 7: Github and versioning
MHK:
Experiment with, how to tag (label) different versions of experiments in which branches. For now we only have the MASTER branch which obviously is not enough when actual functionel code will be delivered. Andrei might have proposals to this as well. 