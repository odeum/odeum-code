# Scene Creation with Fixed and Flexible Components
### Config.json file

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
And for each scene we must define it in the same file:
```JSON
{
    "tabs":[...],
    "scenes":[
        {
            "name": "Dashboard",
            "id":"dashboard",
            "location": "/dashboard/general",
            "icon": "dashboard"
        }
    ]
}

```
**_Mandatory_** : Set the location of the **scene** to be the first **tab**

---


### Folders & Files structure

After that we create a folder and the following files inside _**custom_apps/containers**_ : 
 1. **Scene**
	* **index.js**
	* **route.js**
 2. **Scene/Tabs**
	* *No Files*
 3. **Scene/Tabs/FixedComponent**
	* **FixedComponent.js**
	* **route.js**
 4. **Scene/Tabs/FlexibleComponent**
	* **FlexibleComponent.js**
	* **route.js**
 5. **Scene/Tabs/ParentComponent**
    * **ParentComponent.js**
    * **route.js**
6. **Scene/Tabs/ParentComponent/ChildComponents/Child1**
    * **Child1Component.js**
    * **route.js**

So the folder structure will look like this:
```
/custom_apps
   /Scene
     index.js
     route.js
     /Tabs
         /FixedComponent
            FixedComponent.js
            route.js
         /FlexibleComponent
            FlexibleComponent.js
            route.js
         /ParentComponent
            ParentComponent.js
            route.js
            /ChildComponents
                /Child1Component
                 Child1Component.js
                 route.js
                /Child2Component
                 Child2Component.js
                 route.js
```

---
Further more there are a few conditions to meet for the tabs to work properly:
* All tabs/scenes **must have _componentWillMount()_** with a **_function_** connected to the **store** to notify the tabs what tab should be marked as active if coming from a direct *URL* 

* Scenes must invoke **changeId('scene.id')** function.

* Tabs must invoke a **tabChange(scene.id,tab.name)** function. 
  * Flexible Components must also have **addTab(scene.id,tab.name)** **_BEFORE_** tabChange().



```JSON
{"tabs": 
    [
        {
            "id": "scene1",
	    ...rest...
        }
    ]
"scenes":
    [
        {
            "name": "Scene 1",
            "id":"scene1"
            ...rest...
        }
    ]
}
```
----

### **Scene using the main tabs container**:

```javascript

const sceneProp ={id:'sceneid'}

class Scene extend Component{
componentWillMount()
{
	this.props.onMount()
}
render(){
     {React.cloneElement(this.props.children, sceneProp)}
}
}

function mapDispatchToProps(dispatch) {
    return{
        onMount: ()=>{
            dispatch(changeId(sceneProp.id))
        }
    }
    
}
```
----
### **Fixed Component with Tab**


```javascript
const props={name:'Appendix List'}

class FixedComponent extends Component {
    
    componentWillMount() {
        this.props.onMount(this.props.id,props.name)
    }
	....
	}
	...
	function mapDispatchToProps(dispatch) {
    return{
        onMount: (id,name)=>{
            dispatch(tabChange(id,name))
        }
    }
}
```
----
### **Flexible Component with Tab**

```javascript
class Form extends Component {
    
    componentWillMount() {
        this.props.onMount( 
            this.props.id,{
            label:"Form",// OR this.props.flexibletab.name 
            icon:"general", // OR this.props.flexibletab.icon
            location:"/forms/list/"+this.props.URLprops.id,
            fixed:false
        })
    }
   
    ...
	}

const mapStateToProps = (state,ownProps) => ({
    URLprops:ownProps.params
    /*
    flexibletab: getFlexibleTabProps() //selector function
    */
})
	function mapDispatchToProps(dispatch) {
    return{
        onMount: (sceneid,tab)=>{
            dispatch(addTab(sceneid,tab))
            dispatch(tabChange(sceneid,tab.label))
        }
    }
    
}
```
If coming from outside this Flexible tab needs to add itself to a tabsContainer hence the _**addTab()**_ function and _**tabChange()**_ to set the new added tab as _active_

----

## Routing
----

Each component that needs to be codesplit needs a _**route.js**_ 
file

### **Scene Route**

Here we define the path of the scene and the child routes:

```javascript
module.exports = {
  path: 'scene',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Tabs/FixedComponent/route.js'),
        require('./Tabs/FlexibleComponent/route.js')
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

### **FixedComponent**

```javascript
module.exports = {
  path: 'fixedComponent',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./fixedComponent.js').default)
    })
  }
}
```


### **FlexibleComponent**

```javascript
module.exports = {
  path: 'flexibleComponent/:id/:name/:etc...',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./flexibleComponent.js').default)
    })
  }
}
```

It is _highly_ recommended to give a fixed URL in addition to an URL params to avoid conflits with another child while navigating.





	

