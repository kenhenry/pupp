var fs = require("fs");

var data = fs.readFileSync('./message.txt','utf-8');

console.log(data,typeof data);