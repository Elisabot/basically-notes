// make a request object and pass it an obj w/ options

const optionsStructure = {
  hostname: 'elisabot.me',
  port: 8070,
  path: '/portfolio',
  method: 'GET',
  headers: {
  'Content-Type': 'application/json'
  }
}

const request = http.request(options, res => {
  //handle response here
})