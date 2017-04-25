# Folder Structure Convention

## Source files 

## Public static source files 
```
/public
/public/index.html
/public/favicon.ico
```

## Folder Structure Convention example for ODEUM Report Web App

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

