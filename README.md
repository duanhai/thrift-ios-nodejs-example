# Thrift on iOS

An example on accessing a [Thrift](https://thrift.apache.org/) API from an iOS app.


## Building the interfaces

Whenever you change a Thrift interface definition, you need to update the generated code for the languages you're using. In our case, we want to build NodeJS and Cocoa bindings:

```
thrift -o client/ThriftTest --gen cocoa thrift/messaging-service.thrift 
thrift -o server --gen js:node thrift/messaging-service.thrift 
```

*You usually might not want to version-control the generated code, but generate it during build/compile time instead.* The code is included here for a quick reference on what it looks like.


## Running the server

To run the server:

```
cd server
npm install
npm start
```

If you're curious, there's also a NodeJs-based client you can try out by simply running `npm run client`


## Compiling the client


To test this on a real device, deploy the server code to your hosting of choice (eg. Heroku) and change the server URL on client to point to it.

### Thrift 0.9.3
Mac OS 10.13.4 install thrift 0.9.3 with refer link 
https://gist.github.com/timvlaer/721ba30f8fc6a7aac1b0190e132a4261

p.s. Before you brew link thrift,make sure that you have deleted the high version e.g. thrift@0.11.0.
On my mac,the path is "/usr/local/Cellar/thrift/xxxxx"
