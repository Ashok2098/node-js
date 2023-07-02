const http = require('http');

// http.createServer((req,resp)=>{
//   resp.write('<h1>This is my first server response to the port 4500</h1>');
//   resp.end();
// }).listen(4500);  // createServer is a func which takes an arrow fun as a parameter and it has req and resp. you got to end the server too

// you can do the same thing like this as well to avoid ambiguity


const func =(req,resp)=>{
  resp.write('<h1>This is my first server response to the port 4500 in func as a parameter</h1>');
  resp.end();
}
http.createServer(func).listen(4500);
