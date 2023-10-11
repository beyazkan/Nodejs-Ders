// Date - UTC+3
// var result = new Date(Date.now());
// console.log(result);
var time = new Date();

// var result = time.getTime();
// var result = time.getMonth();
// var result = time.getDate();
// var result = time.getDay();
// var result = time.getFullYear();
// var result = time.getHours();
// var result = time.getMinutes();
// var result = time.getSeconds();
// var result = time.getMilliseconds();
var result = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`;

console.log(result);