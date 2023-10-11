// forEach

// var array = ["Ali", "Ayşe", "Mehmet", "Ece"];

// ["Ali", "Ayşe", "Mehmet", "Ece"].forEach((e,i, array) => {
//     console.log(e, i);
// });

var array = [1,2,3,4];
array.forEach(e => {
    console.log(e);
    if(e == 2) array.shift();
});

console.log(array);