// as many times as it takes, love
let condition = true
// what's one look like?

const coolPromiseBro = (value) => { 
  return new Promise ((resolve, reject) => {
      if (condition) {
        resolve(`action or ${value} data here`)
      } else {
        reject(`action or ${value} data here`)
      }
    })
} 
// let's cook up a few handlers to do something with 
// the data provided by our promise definition
const handleSuccess = (resolvedValue) => console.log(resolvedValue)
const handleFailure = (rejectionValue) => console.log(rejectionValue)

// call the promise passing it our handlers
coolPromiseBro(someValue)
  .then(handleSuccess)
  .catch(handleFailure)

// like so many flexible things, we can define 
// the EXECUTOR in-situ 
// or pass em in like this

const executor = (resolve, reject) => {
  if (condition) {
    resolve('action or data')
  } else {
    reject('action or data')
  }
}

// seperation of concerns, my brother my sister

const passDisPromiseAnExecutor = new Promise (executor);
// you don't even need to slap a handler on it

// OR you could work with everything happening in place
const extraChunkyPromiseInPlace = () => { 
  return new Promise ((resolve, reject) => {
    if (condition) {
      resolve('action or data, can we do a handler in here?')
    } else {
      reject('action or data, can we do a handler in here?')
    }
  })
}

// CHAINS
// here's a synchronous chain
firstPromise()
  .then((resolvedValue) => {
    return secondPromise(resolvedValue)
  })
  .then((nextResolvedValue) => {
    return yetAnotherPromise(nextResolvedValue)
  })
  .then((successMessage) => console.log(successMessage))
  .catch(handleFailure)

// async chain using .all
Promise.all([sillyPromise, smartPromise, purplePromise])
  .then((arrOfResolvedValues) => {
  //do stuff with arrOfResolvedValues
  })
  .catch((rejectionErr) => console.log(rejectionErr));
