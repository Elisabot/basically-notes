# Accessing Stuff inside Objects

Objects are filled with unordered data, which you make sense of by key-value pairs. A key's value may be any data type including functions and yet more objects.

Keys are always strings, but if they don't contain a special character you don't need to wrap them in quotes.

for your consideration
`keyName` vs `'key name'`

## Dot notation

Access built-in and other properties of an object like so: `myObj.myProperty` or `myObj.length`

## Bracket notation

Keys sometimes have special characters, a number or space for example. In that case the object property is accessed like: `myObj['My Property']` 

Bracket notation is rad because you can even use a dynamic variable. Look at this.
```
let returnSomeProp = (objName, propName) => objName[propName];
returnSomeProp(teaHouse, 'tea specials');```