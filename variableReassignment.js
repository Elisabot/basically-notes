// thinkin about reassignment

// global variable
// that could be chillin ANYWHERE
let name = 'Bernie'

// our method that just happens to reassign
// bc we forgot a let or const in there
// so name is gonna be acting on that global
function sayName(arg) {
	name = arg
	console.log(name)
}

console.log(name)
// should Bernie

sayName('Earnie')
// BAM! reassigned your global by calling your method
console.log(name)
// see?? still Earnie!

// THIS CAN ALL BE PREVENTED 
// CREATE A LOCAL VARIABLE <3
function sayMyName(arg) {
	let name = arg
	console.log(name)
}

sayMyName('Mernie')
// should Mernie
console.log(name)
// should Earnie
