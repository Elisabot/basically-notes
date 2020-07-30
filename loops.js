let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

let pantryList = ['brown rice', 'hard beans'];

// console.log('increment list')
for ( let i = 0; i < groceryList.length; i++ ) {
  // console.log(groceryList[i])
}

// there's something uncomfortable here about the asymmetry of needing the >= instead of >

// console.log('decrement list')
for ( let i = ( groceryList.length - 1) ; i >= 0; i-- ) {
  // console.log(groceryList[i])
}

// nested for loops
// let's take out what's in the pantry already
// without mutating our original arr
const groceryCopy = groceryList.slice();

for ( let i = 0; i < groceryList.length; i++) {
  for ( let j = 0; j < pantryList.length; j++) {

    if ( groceryList[i] === pantryList[j] ) {
      groceryCopy.splice(i, 1)
    }
  }
}
// console.log('remove pantry items' + '\n' + groceryCopy.join(', '))

// while loop
// careful easy to hang ur compie in this one
const whileLoop = arr => {
  // look it's just that global vars are gross
  let i = 0
  while ( arr[i] != 'pasta' ) {
    console.log(arr[i]);
    i++
  }
  console.log('we escaped')
}
// whileLoop(groceryList)

const doWhileLoop = arr => {
  let i = 0
  do {
    i++;
    console.log('hi ur going to see at least one run outta me, babe ' + '\n' + 'i = ' + i );
  } while ( i < 0 )
  console.log('and now I\'m done')
}
// doWhileLoop(groceryList);
