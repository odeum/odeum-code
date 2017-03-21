# Guidelines

## Components

## Basic UI Components
* <a href="./BasicUIComponents.md" target="_blank">ODEUM CodeJS Basic UI Components</a>

## App Components
* <a href="./AppComponents.md" target="_blank">ODEUM CodeJS App Components</a>

## Folder structure

## Source files 
```
/
/src
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
      /components
          /Header
          /index.js
          /actions.js
          /reducer.js
          /styles.js
              /HeaderLogo
              /index.js

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
            /components
        /Tasks
        /Registrations
        /Organisation
        /Settings
        /AddMenu
        /AppMarket          
```