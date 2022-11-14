# Everything Hyper Text Transport Protocol

## Response Codes
100-199 Informational
200-299 Successful
  * `200 ok`
  * `201 created`
  * `202 accepted` 
300-399 Redirect
400-499 Client Errors
  * `400 bad request` bad syntax, invalid, deceptive routing, etc
  * `401 unauthorized` the client must authenticate itself to get the requested response
  * `403 Forbidden` the client is authenticated and does not have rights to access
  * `404 Not Found` the server can't find the requested resource
  * `408 request timeout` sent when an idle connection to the server without any previous request by the client would like to be shut down by the server, not neccessary to shut a connection but sometimes sent
  * `418 I'm a teapot` the server refuses to brew coffee with a teapot
500-599 Server Errors
  * `500 internal server error` something happened the server didn't know how to handle
  * `501 not implemented` servers are only required to support `GET` and `HEAD` other request methods may not be implemented
  * `502 bad gateway` an invalid response was aquired while serving as a gateway for a request
  * `503 service unavailable` the server is not ready to handle the request, commonly used for maintenance or when the server is overwhelmed

## Protocols
#### TCP _Transmission Control Protocol_
Allows two hosts to connect and exchange streams of data, guaranteeing delivery of packets in order as sent. Very reliable.

#### UDP _User Datagram Protocol_
Handshake-less! Operates with a connectionless communication model. Although unreliable and insecure, it is so very fast. 

#### TLS _transport layer security_
A secure data transmission protocol which uses encryption to protect information. Obvi pairing TLS with HTTP gets ya a HTTPS _hypertext transfer protocol secure_ which is what we all want in life. 

Fun fact, TLS evolved out of the old SSL _secure sockets layer_ protocol. 

### HTTP comes in a few versions
1.1 was completely text based
2 all messages are encapsulated in binary data, smaller, faster, more flexible
3 is still just a draft, but utilizes a tsp called QUIC which is like a form of UDP

##### note
  * IPC _inter-process communication_ is a protocol for local socket communication using the kernal :shrug: is this what a locl dev environment does?
  * side node: thinking about localhost again. port numbers vs IP addresses, same? not same??
  not same, love. an IP address refers to one machine or system in a network, whereas a port specifies the interface of connection to an application or service on a system
  