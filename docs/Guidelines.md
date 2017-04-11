# Guidelines

## Components

## Basic UI Components
* <a href="./BasicUIComponents.md" target="_blank">ODEUM CodeJS Basic UI Components</a>

## App Components
* <a href="./AppComponents.md" target="_blank">ODEUM CodeJS App Components</a>

## JavaScript Style Guide
We will try to refer to Airbnb's style guide which is pretty strict and solid. We will produce an eslintrc with all the rules that apply for ODEUM CodeJS. 

* https://github.com/airbnb/javascript 
* http://eslint.org/docs/rules
* https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules

##PropTypes
It is critical that all component development is declared with PropTypes everywhere possible. PropTypes will work both as typechecking security and as an API overview for other developers on which props the component agregates. 

https://facebook.github.io/react/docs/typechecking-with-proptypes.html

https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/

## Github branching and versioning
Initially we pull and commit work to 3 branches:

- development/alpha
- development/beta
- MASTER

* <a href="./developer/odeum-codejs-branching-strategy.png" target="_blank">ODEUM CodeJS Branching Strategy</a>

## Folder structure

## Source files 

```
/
/src
/src/containers
/src/components
/src/components/Header
/src/components/Header/HeaderLogo
/src/data    (/models)
/src/scenes  (/routes)
/src/services
/src/services/api
/src/services/geolocation
````

## Public static source files 
```
/public
/public/index.html
/public/favicon.ico
```

## Example component structure 

```
/
  /src
  /App.js
  /index.js
      /containers
          /HeaderNotifications
          /index.js
          /actions.js
          /reducer.js
          /styles.js
          /actiontypes.js
```

## Example scene structure for ODEUM Report Web App

```
/src
  /assets/
  /containers/
  /components/
  /scenes/
    /Login 
    /Home
      /scenes
        /Dashboard
        /Tasks
            /containers
              Smart1/
                /actions/
                /reducers/
                /assets/
                index.js
            /components/
              Dumb1/
                /assets/
                /styles/
                index.js
              Dumb2/index.js
            /actions/actiontypes.js
            /reducers
            /styles
        /Forms
        /Reports
        /Organisation
        /Settings
        /AddMenu
        /AppMarket
  /store/
    /reducers/
  /services/
    /api/          
```