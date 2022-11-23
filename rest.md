## REST
###### REpresentational State Transfer is and architectural style.
Rest-ful systems are
* stateless
* seperate concerns between client and server

#### seperation of concerns
This system is functions in such a way that the client can change at any time without affecting the server and likewise the server can be changed at any time without affecting the operation of the client. 
We can do this by keeping the format of messages consistent. 
* keep user interface concerns seperate from data storage concerns

? An example of this might be a webpage that fetches a user object then deconstructs it to fascilitate personalization and authorization in the view of an app

#### stateless ness
The server doesn't need to know anything about what's happening with the client and vice-versa. We do this by utilitizing resources tharther than commands. Objects, documents, _things_ which may need to be stored or sent. 
* they do not rely on interfaces

###### requests
generally consist of 
* an HTTP verb
* a header, which useful information
* a path to the resource
* an optional message body with data

###### headers and accept parameters
the header of a request from the client contains a field to make sure the right kind of data is passed back when processed. Types of content are MIME Types including `image/png, image/gif, audio/wav, text/html, text/css, application/json, application/pdf, application/octet-stream`
```GET /profiles/ergbert
Accept: text/html, application/xhtml
```
the response message will then contain a corresponding Content-Type
```HTTP/1.1 200 (OK)
Content-Type: text/html
```

###### paths
dircetions to the resource that an operation should be performed on. paths should be designed to help the client know what's going on.

_convention: keep the first part of a path plural_
* `customers/:id`, `users/abc123/images/123xyz`, `pages/:123`

###### note
every http verb has a corresponding success code

* GET <- 200 OK
* POST <- 201 CREATED
* PUT <- 200 OK
* DELETE  <- 204 NO CONTENT

