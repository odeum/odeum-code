Tab System && Scene Creation with Fixed and Flexible Components
-----

For each **tab instance** it must be defined inside _**custom_apps/config.json**_ in the **tabs** array
```JSON
 "tabs": [
        {
            "id": "dashboard",
            "activeTab":"General",
            "tabs": [
                {
                    "label": "General",
                    "location": "/dashboard/general",
                    "icon": "assignment_turned_in",
                    "fixed": true
           }]
			}
	]
```
---
After that we create a folder and the following files inside _**custom_apps/containers**_ :

Folders & Files structure: 
1. **Scene**
	* **index.js**
	* **route.js**
2. **Scene/Tabs**
	* *No Files*
3. **Scene/Tabs/FixedComponent**
	* **fixedComponent.js**
	* **route.js**
6. **Scene/Tabs/FlexibleComponent**
	* **flexibleComponent.js**
	* **route.js**
	
So the folder structure will look like this:
```
/custom_apps
   /Scene
     index.js
     route.js
     /Tabs
         /FixedComponent
            fixedComponent.js
            route.js
         /FlexibleComponent
            flexibleComponent.js
            route.js

```

---
Further more I will explain each file individually, all tabs/scenes **MUST** have _**componentWillMount()**_ with a _dispatch_ function connected to the store to 
notify the tabs component what is active if comming from a direct *URL* (URL Management)

Scenes must have a *changeId('id')* function on mount function

The *'id'* is the id that is set inside the _**config.json**_ file
```
"tabs": 
[
			{
            "id": "dashboard",
			...rest...
			}
]
```
----

**Scene**:
----
```javascript
class Scene extend Component{
componentWillMount()
{
	this.props.onMount()
}
...
}
function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(changeId('sceneid'))
        }
    }
    
}
```
----
**Fixed Tab**
----

```javascript
class FixedComponent extends Component {
    
    componentWillMount() {
        this.props.onMount()
    }
	....
	}
	...
	function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(tabChange('sceneid','FixedComponentName'))
        }
    }
}
```
----
**Flexible Tab**
----

```
class Form extends Component {
    
    componentWillMount() {
        this.props.onMount('formlist',{
            label:"Form",
            icon:"general",
            location:"/forms/list/"+this.props.id,
            fixed:false
        })
    }
   
    ...
	}
	...
	function mapDispatchToProps(dispatch) {
    return{
        onMount: (sceneid,tab)=>{
            dispatch(addTab(sceneid,tab))
            dispatch(tabChange(sceneid,tab.label))
        }
    }
    
}
```
If coming from outside this Flexible tab needs to add itself to a tabsContainer hence the addTab function

----
Routing
----

Each component that needs to be codesplit needs a _**route.js**_ 
file

**Scene Route**

You must define here the child routes of the Scene

```
module.exports = {
  path: 'scene',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Tabs/FixedComponent/route.js'),
        require('./Tabs/FixedComponent/route.js')
      ])
    })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index.js').default)
    })
  }
}
```

**FixedComponent**

```
module.exports = {
  path: 'fixedComponent',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./fixedComponent.js').default)
    })
  }
}
```

**FlexibleComponent**

```
module.exports = {
  path: 'flexibleComponent/:someProps',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./flexibleComponent.js').default)
    })
  }
}
```

It is recommended to give a fixed URL in addition to an URL params to avoid conflits with another child while navigating.





	

