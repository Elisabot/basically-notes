regarding finding the first index of an element in an array 

.indexOf() expects a value as the first parameter
	good choice for returning the index of stings, numbers, booleans— primitives

.findIndex() expects a callback, like you— you worthwhile, smart lil hoe, jk; return the index of an object or non-primitive or when your find condition is more complex than just a value

	`arr.findIndex(arr => arr >= 13)`

	`arr.indexOf(13)`

.includes() expects a value and returns a boolean

	`arr.includes('your face')`
	expect: false