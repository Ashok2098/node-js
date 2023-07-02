const app = require('./app');
console.log(app.z()) // console is a global module. no need to import
const fs = require('fs'); // fs is a non global module. so we imported it.
fs.writeFileSync("hello.txt","This is my first dummy file");
console.log("--->",__filename); // shows the file name
console.log("--->",__dirname); // shows the directory name

const arr = [2,4,7,2,3,4,3,5];
let res = arr.filter((item)=>{
  return item==3
})
console.log(res);