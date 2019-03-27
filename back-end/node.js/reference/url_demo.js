const url = require('url');

const myUrl = new URL('http://google.pl/lel?id=10');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host 

console.log(myUrl.host);

//Hostname
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

//Add Param
myUrl.searchParams.append('test', '123');
console.log(myUrl.searchParams);

// 46:14