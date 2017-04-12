# JavaScript and React Style Guide
We will try to refer to Airbnb's style guide which is pretty strict and solid. We will produce an eslintrc with all the rules that apply for ODEUM CodeJS. 

## Inspiration

* https://github.com/airbnb/javascript 
* http://eslint.org/docs/rules
* https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
* https://github.com/styled-components/stylelint-processor-styled-components

##PropTypes
It is critical that all component development is declared with PropTypes everywhere possible. PropTypes will work both as typechecking security and as an API overview for other developers on which props the component agregates. 

https://facebook.github.io/react/docs/typechecking-with-proptypes.html

https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/

## Components

### Stateless components (presentational components)
For stateless class components use PureComponent 

```javascript 
class HavingFun extends React.PureComponent {
	render() {
		return (
            <div>
                <h1>Having fun with Redux</h1>				
            </div>
		)
    }
}

export default HavingFun
``` 

Use stateless functional components (non-class components) whenever possible.  
```javascript
const HelloName = ({name}) => {
    const sayHi = (event) => {
        alert(`Hi ${name}`)        
    }
    return (
            <div>
                <a href="#" onClick={sayHi}>Click me</a>
            </div>
        )
}

export default HelloName


const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
);

export default HelloWorld;
```

### Stateful components (container components)

```javascript 

```