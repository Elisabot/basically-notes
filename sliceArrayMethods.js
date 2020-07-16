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
