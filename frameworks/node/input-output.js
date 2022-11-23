// input/output

process.stdin.on('data', (userInput) => {
  // gotta convert from a Node Buffer class
  console.log(userInput.toString().trim())
})

// i know, how does that even work
// process.stdin is an instance of `EventEmitter`
// so we get all of its methods and goodies