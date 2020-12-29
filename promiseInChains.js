import CatCalls from './promiseDefinitions'
const userId = 'passing me in from somewhere esle sure093927'
// chaining promises, right?

// so we wanna make an initial call
// say to verify a user id
CatCalls.validateUser(userId)
  .then(CatCalls.fetchUserCatPics)
  .then(CatCalls.fetchNotifications)


// questions
// naming bullshit, how do we differentiate btwn executor and promise 
// what's the diff btwn returning a promise and no
// how do we switch between a blocing and non-blocking promise?

// an example from the place
// use of directly setting resolve keyword hmmm
const name = 'eMeyer'
const fetchUserName = (name) => {
  // fake a call to get user name
  return new Promise(resolve => setTimeout(() => resolve(name), 100))
}
 
fetchUserName.then(res => { 
  return res.includes('Meyer') ?
  Promise.resolve(`Hey ${name}!`) :
  Promise.reject('Who are you?')
})
  .then((res) => console.log(res), (err) => alert(err))

// okay our turn to get freaky


