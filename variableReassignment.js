// thinkin about reassignment

// global variable
// that could be chillin ANYWHERE
let name = 'Bernie'

// our method that just happens to reassign
function sayName(arg) {
	name = arg
	console.log(name)
}

// should Bernie
console.log(name)
// should Earnie
sayName('Earnie')
// uh oh still Earnie!
console.log(name)


// THIS CAN ALL BE PREVENTED 
// CREATE A LOCAL VARIABLE IN YER METHOD <3
function sayMyName(arg) {
	let name = arg
	console.log(name)
}

// should Mernie
sayMyName('Mernie')
// should Earnie
console.log(name)
