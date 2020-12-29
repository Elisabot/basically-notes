// SET UP ALL THE CALLS
// we're taking for granted that our endpoints 
// return useful err messages
// and saving any extra data processing for handlers etc.
import AxiosOrSomeGoodBS from 'that-package'
const CatCalls = {}

CatCalls.validateId = (id) => {
  return new Promise ((res, rej) => {
    // call verifyId endpoint with id
    if (codition) {
      return(res)
    } else {
      return(rej)
    }
  })
}

CatCalls.fetchUserCatPics = () => {
  return new Promise ((res, rej) => {
    // call fetchCatPics endpoint with user id
    if (res) {
      return(res)
    } else {
      return(rej)
    }
  })
}

CatCalls.fetchNotifications = () => {
  return new Promise ((res, rej) => {
    // call fetchNotifications endpoint with user id
    if (res) {
      return(res)
    } else {
      return(rej)
    }
  }) 
}

// export our CatCall ~class~~ object guy
export CatCalls
