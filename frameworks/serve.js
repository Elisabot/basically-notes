// creating a server instance
const http = require('http')

const server = http.createServer((req, res) => {
  res.end('this is an end')
})

server.listen(8080, () => {
  const { address, port } = server.address()
  console.log(`Server listening on http://${address}:${port}`)
})

// something here isn't working <3