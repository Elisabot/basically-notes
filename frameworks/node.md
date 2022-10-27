# Node

`REPL` read-eval-print loop

Node has a global object which contains novel methods including

* clearInterval
* clearTimeout
* setInterval
* setTimeout
* queueMicrotask
* clearImmediate
* setImmediate

Because it doesn't generate a DOM we have no Window in Node

### modules
`require()` is our import mechanism for modules
common modules in Node include `console`, `events`, `process`, `os`, and `util`
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
###### process
stores and controls information abt the environment, like the current working directory which is useful for switching tasks based on if you're in dev or not. Adding a property to `process.env` with the key `NODE_ENV` and a value of production or developement is a useful way to do that.
`.stdin` or `.stdout` for input/output 

`process.memoryUsage()` returns information about CPU demands
###### readline
`.createInterface()` returns an `EventEmitter` set up to emit line events
###### os
gotta be imported in order to use, unlike the others. 
`.type()` operating system eg. Darwin, `.arch()` CPU architecture, `.networkInterfaces()` IP, MAC address, etc., `.homedir()` current user's home directory, `.hostname()`, `.uptime()` of the system, and so much more
###### util
methods for debugging and maintaining, also must be required to use. 
`.types` is useful for type checking
`.promisify()` turns callback functions into promises

### useful tips
`.editor` for multiline statements

