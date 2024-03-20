## GRAPH QL

Imagine a world where, instead of _endpoints_ you access *types* and *fields*

this system is meant to provide stability and speed as you remove the frigility of endpoints changing out from underneath you and eliminating the extra data coming down the wire on a call where you don't need every field

with the ability to add fields while gracefully deprecating others you apparently eliminate the need for api versions

### gloves off nitty gritty
you're going to make a service and in there you're going to define some types.
those types are going to have fields.
```type Query {
  me: User
}
 
type User {
  id: ID
  name: String
}```

you're going to want functions for each field on each type.
```function Query_me(request) {
  return request.auth.user;
}
 
function User_name(user) {
  return user.getName();
}```

once this service is running, usually a URL on a web service btw— it recieves a query, checks it versus it's types and fields, and then executes whatever those functions are asking for.