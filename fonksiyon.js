// function test(){
//     console.log("Test");
// }

// test();
// console.log(test);
// console.log(typeof test);

// function squared(n, x){
//     var square = n ** 2;
//     console.log(`X Değeri: ${x}`);
//     return square;
// }

// console.log(squared(9, 5));

// function squared(n = 3){
//     var square = n ** 2;
//     return square;
// }

// console.log(squared());

// var squared = function(n){
//     return n ** 2
// };

// console.log(squared(3));

var squared = (n) => {
    return n ** 3
};

console.log(squared(3));