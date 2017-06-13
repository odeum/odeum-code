JavaScript Helper
==============================================

JavaScript Helper functions or links to code or snippets or tutorials.
[Check out Nodeschool.io](https://nodeschool.io)

<!-- TOC -->

- [1. Strings](#1-strings)
    - [1.1. Template Literals & Tagged Template Literals](#11-template-literals--tagged-template-literals)
        - [1.1.1. Syntax](#111-syntax)
- [2. Functions](#2-functions)
    - [2.1. Immediately-Invoked Function Expression (IIFE)](#21-immediately-invoked-function-expression-iife)
        - [2.1.2. FUNCTION DECLARATION](#212-function-declaration)
        - [2.1.3. FUNCTION EXPRESSION](#213-function-expression)
        - [2.1.4. IIFE (unnamed)](#214-iife-unnamed)

<!-- /TOC -->

# 1. Strings

## 1.1. Template Literals & Tagged Template Literals

- [Template Literals Definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) 

### 1.1.1. Syntax
```js
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`
```

# 2. Functions

## 2.1. Immediately-Invoked Function Expression (IIFE)

### 2.1.2. FUNCTION DECLARATION
```js
function MyDeclaredFunction(){
    var notSoSecret = 42;
    console.log(notSoSecret)
}
```

### 2.1.3. FUNCTION EXPRESSION
```js
var MyFunctionExpression = function(){
    var notSoSecret = 42;
    console.log(notSoSecret)
}
```

### 2.1.4. IIFE (unnamed)
```js
(function(){
    var superSecret = 42;
    console.log(superSecret)
})()
````
