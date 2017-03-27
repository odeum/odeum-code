# Guidelines

## Components

## Basic UI Components
* <a href="./BasicUIComponents.md" target="_blank">ODEUM CodeJS Basic UI Components</a>

## App Components
* <a href="./AppComponents.md" target="_blank">ODEUM CodeJS App Components</a>

##PropTypes
Is is critical that all component development is declared with PropTypes everywhere possible. PropTypes will work both as typechecking security and as an API overview for other developers on which props the component agregates. 

https://facebook.github.io/react/docs/typechecking-with-proptypes.html

https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/


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
  /scenes
    /Login 
    /Home
      /scenes
        /Dashboard
        /Create
            /containers
            /components
        /Tasks
        /Registrations
        /Organisation
        /Settings
        /AddMenu
        /AppMarket          
```