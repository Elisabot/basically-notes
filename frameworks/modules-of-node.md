## Modules of Node

`require()` is our import mechanism for modules
common modules include `console`, `events`, `process`, `os`, and `util`

###### buffer
a global module

###### console
methods include `.log()`, `.assert()` prints when a value is falsy, `.table()` prints a table from an object or arry

###### error
has all the normal javascript errors

###### events
when imported, provides the `EventEmitter` class which contains `.on()` a listener method and `.emit` which announces when a named event has occurred

###### fs
import files and stuff

###### http
for engaging with http network requests. methods include
  `createServer()` which makes an instance of a Server object and
  `request()` which configures details of a request and what to do with a response
  `get()` is a method which automatically sets the call method to `GET` and calls `req.end()` automatically

###### net
asynchronous network api for creating stream-based TCP or IPC servers and connections, extended to the http module

###### process
stores and controls information abt the environment, like the current working directory which is useful for switching tasks based on if you're in dev or not. Adding a property to `process.env` with the key `NODE_ENV` and a value of production or developement is a useful way to do that.
`.stdin` or `.stdout` for input/output 

`process.memoryUsage()` returns information about CPU demands

###### readline
read data from streams, any streams! one line at a time. `.createInterface()` returns an `EventEmitter` set up to emit line events

###### os
gotta be imported in order to use. useful methods include:
* `.type()` operating system eg. Darwin
* `.arch()` CPU architecture
* `.networkInterfaces()` IP, MAC address, etc.
* `.homedir()` current user's home directory
* `.hostname()`
* `.uptime()` of the system
...and so much more

###### querystring
just the parsing and formatting of url query strings, available in url module in newer versions

###### url
used to deconstruct or construct parts of an URL, instantiating a new URL object gives you access to `hostname`, `pathname`, `searchParams`

**note** `.search` differs from `.query` in that search includes the preceeding question mark and does not decode the query string, whereas query when returning an object will decode both keys and values which can result in gotchas. **beware the _~tilde_**

###### util
methods for debugging and maintaining, also must be required to use. 
`.types` is useful for type checking
`.promisify()` turns callback functions into promises
