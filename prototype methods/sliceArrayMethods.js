//thinking about arrays

// OKAY IT TURNS OUT I WAS TURNED AROUND BC OF INDEX SELECTORS
// THESE RETURN THE SAME THING— THANK THE DEVIL
// A COPY OF THE ORIGINAL ARRAY BUT WITHOUT WHATEVER 
// INDEXES WE TOLD IT TO GET RID OF
//
// WHEN WORKING WITH A NEGATIVE INDEX 
// I COULD THINK OF IT AS 
// 		myArray.slice(myArray.length - n)
// 		=== myArray.slice(-n)
// 
// IF YOU DON'T GIVE IT AN ARGUMENT IT JUST COPIES THE ORIGINAL ARRAY

// oh also there is some reall bullshit around slicing specific indexes
const groceryList = [
	'popcorn', 'bananas', 'coffee beans', 'brown rice',
	'pasta', 'coconut oil', 'plantains'
	];

console.log(groceryList)
// remove everything but coffee, bananas, and brown rice
console.log(groceryList.slice(1, 4, 5, 6, 7))
// WHAT. Can also do (1, -3) 
// OR jesus why (1, 4, 6, 7)
// OH CHRIST I SEE, IT'S A BEGINNING AND END SELECTOR
// A RANGE, IF YOU WILL
// SEE THIS IS WHY
// myArray.slice(1, 4) or myArray.slice(1, -3)
// GIVE YOU JOY

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// why is it that when we execute this method and store it 
// in a variable we store the removed elements (totes normal)
const sliced = animals.slice(2)
console.log('sliced', sliced)

console.log('versus')
// but when we execute it in a console.log we return the copy of the original array
console.log('in place', animals.slice(2));
// expected output: Array []

// the docs say it returns a shallow copy of a defined portion
// of the original array
// so how are we getting the removed elements returned
// when we run the method in a variable
