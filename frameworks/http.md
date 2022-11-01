# Everything Hyper Text Transport Protocol

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
IPC _inter-process communication_ is a protocol for local socket communication using the kernal :shrug: is this what a locl dev environment does?