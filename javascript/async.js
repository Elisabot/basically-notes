// looks like

// async function () {
  // do stuff
// }

const someFunc = async () => {
  if (condition) {
    return 'possitive resolution'
  } else {
    return 'err, my friend'
  }
}

// three possible outcomes
// undefined, a non-promise resolved value, or a promise

// await is an operator used within async functions
// that halts or pauses execution of the async function
// until a given promise is resolved

// returning after some time to learn
// just a promise
const somePromise = new Promise((resolve, reject) => {
  console.log('are you ready to wait a few seconds?');
  setTimeout(() => resolve('all done yep'), 3000);
});
// let's grab that promise from this async function
const someAsync = async () => {
  const result = await somePromise;
  console.log(result);
}

someAsync();