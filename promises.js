// as many times as it takes, love
// what's one look like?
const condition = true

const coolPromiseBro = () => { 
  return new Promise ((resolve, reject) => {
    if (condition) {
      resolve(`some action or data`)
    } else {
      reject(`some action or data`)
    }
  })
}

// now make it _ES6exier_
const cutePromiseLady = new Promise ((resolve, reject) => {
    return condition ? resolve(`some action or data`) : reject(`some action or data`)
  })

// we can define the EXECUTOR seperately u know
const executor = (resolve, reject) => {
  if (condition) {
    resolve('action or data')
  } else {
    reject('action or data')
  }
}

// or ofc it's spry es6 cousin
const executorLite = (resolve, reject) => {
  return condition ? resolve(`action or data`) : reject(`action or data`)
}
// then pass it in
const niceLookinPromiseYouGotThere = new Promise (executor);

// seperation of concerns, my brother my sister

// let's cook up a few handlers to do something with 
// the data provided by our promise definition
const handleSuccess = (resolvedValue) => console.log(resolvedValue)
const handleFailure = (rejectionValue) => console.log(rejectionValue)
// we're just logging it but think about the possibilities!
// update state, trigger a chain reaction, feed a monkey

// call a promise and pass it our handlers
coolPromiseBro()
  .then(handleSuccess)
  .catch(handleFailure)

// you could even work with EVERYTHING happening in place
const extraChunkyPromiseInPlace = () => { 
  return new Promise ((resolve, reject) => {
    if (condition) {
      resolve('action or data')
    } else {
      reject('action or data')
    }
  })
}

// CHAINS
// here's a synchronous chain
firstPromise()
  .then(data => {
    return secondPromise(data)
  })
  .then((dataTwo) => {
    return yetAnotherPromise(dataTwo)
  })
  .then((dataThree) => console.log(dataThree))
  .catch(handleFailure)

// async chain using .all
Promise.all([sillyPromise, smartPromise, purplePromise])
  .then((arrOfResolvedValues) => {
  //do stuff with arrOfResolvedValues
  })
  .catch((rejectionErr) => console.log(rejectionErr));

  // oh hey it's been years and I'm back huny
  const myLuck = new Promise((resolve, reject) => {
    if(Math.random() < 0.5 {
      resolve('you got it honey')
    } else {
      reject(new Error('uh oh you are not lucky huny'))
    });

    myLuck.then(message => {
      console.log(message)
    }).catch(error => {
      console.log(error)
    });  
  })
