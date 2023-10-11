//Concat
// var array = [>,2,3];
// var array2 = [4,5,6];
// var array3 = [7,8,9];
// var array4 = [10,11,12];

// var response = array.concat(array2, array3, array4);

// Spread Syntax - (...) parantezleri kaldırma
// var response = [...array, ...array2, ...array3, ...array4]

// Join Metodu

// var array =["Hello", "World", "How", "Are", "You?"];

// var response = array.join(" "); // Cümle aralarına karakter girmek

// var text = "istanbul Türkiye'nin en kalabalık şehridir.";

// var response = text.split(" ");
// response[0] = `${response[0][0].toUpperCase()}${response[0].slice(1)}`

// console.log(response);
// console.log(response.join(" "));

// reverse
// var list = [1,2,3,4];
// list.reverse();

// console.log(list);

// pop
// var list = [1,2,3,4];
// list.pop();
// console.log(list);

// shift
// var list = [1,2,3,4];
// list.shift();
// list.shift();
// console.log(list);

// unshift
// var list = [1,2,3,4];
// list.unshift("test",6,7,8);
// list.unshift("5");
// list.unshift("6");

// console.log(list);

// var list1 = [1,2,3,4];
// var list2 = [].concat(list1);

// list2.pop();
// console.log(list1);
// console.log(list2);

var list1 = [1,2,3,4];
var list2 = [...list1];
list2.pop();
console.log(list1);
console.log(list2);