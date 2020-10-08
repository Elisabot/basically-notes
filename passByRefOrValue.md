Arguments(the value of the parameters in a function)
can be passed by *value* or *reference*

## Pass by value

A copy of the incoming parameter is made in memory, and the original values are not mutated when the function runs.

```
let myFun = obj => {
  obj = {
    //some data or motion
  }
}
```
The local reference to `obj` creates a copy of that object and the original object remains unchanged.

## Pass by reference

The inbound paramater value references the original value in memory, thereby changing that external value when the function runs.

```
let myFun = obj => {
  obj.doSomething();
  obj['some key'] = 'data';
}
```
From what I understand, due to syntax this acts upon the reference without creating a copy. 