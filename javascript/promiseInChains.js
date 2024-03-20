import CatCalls from './promiseDefinitions'
const userId = 'passing me in from somewhere esle sure093927'
// chaining promises, right?

// so we wanna make an initial call
// say to verify a user id
CatCalls.validateUser(userId)
  .then(CatCalls.fetchUserCatPics)
  .then(CatCalls.fetchNotifications)

// an example from the place but reformatted 
// cuz theirs makes my brain wanna melt in a bad way
// use of directly setting resolve keyword hmmm
const name = 'eMeyer'
const fetchUserName = (name) => {
  return new Promise(resolve => setTimeout(() => resolve(name), 100))
}

fetchUserName.then(res => { 
  return res.includes('Meyer') ?
  Promise.resolve(`Hey ${name}!`) :
  Promise.reject('Who are you?')
})
  .then((res) => console.log(res), (err) => alert(err))

// here's a synchronous chain
// where each .then resolves before the next can go
// and each instance of data 
// is the resolution of the preceeding promise
firstPromise()
  .then(data => {return secondPromise(data)})
  .then((data) => {return yetAnotherPromise(data)})
  .then((data) => console.log(data))
  .catch(handleFailure)

// okay our turn to get freaky
// chain me up synchronously plz
verifyUser(userId)
  // returns tea list object
.then(fetchTeaPrefereances(userId))
  // requests inventory and checks threshold, 
  // returns reorder list
.then(data => {return checkInventory(data)})
  // query user with order list
.then(data => {return requestTeaReorder(data)})

// questions
// naming bullshit, how do we differentiate btwn executor and promise?

// what's the diff btwn returning a promise and no
// i think it lets you forget about returning it in a chain
// and stuff

// how do we switch between a blocking and non-blocking promise?
// i think you're asking when to whip out a promise.all
// vs. a .then is that right?
