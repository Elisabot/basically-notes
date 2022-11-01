// streams
const readline = require('readline')
const fs = require('fs')

// define a variable that creates a new readline interface
const someInterface = readline.createInterface({
  // let's do this by streaming a local text file
  input: fs.createReadStream('someText.txt')
})

// call your interface with a listener
// here we just log the file line to the console 
someInterface.on('line', (fileLine) => {
  console.log(`- ${fileLine}`)
})

// now for something completely different
