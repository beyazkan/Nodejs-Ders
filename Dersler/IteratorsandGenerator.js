// Iterators and Generators

// for (let value of [1,2,3]){
//     console.log(value);
// }

// for (const value of "object") {
//     console.log(value);
// }

//Iterators

// var obj = {
//     "Istanbul": [
//         "Ahmet",
//         "Ali",
//         "Ceren",
//         "Mehmet"
//     ],
//     "Ankara": [
//         "Ayşe",
//         "Hakan"
//     ]
// };

// İteratör nesne olmadığı için hata verecek.
// for (let value of obj) {
//     console.log(value);
// }

// İteratör nesneye dönüştürme.
// obj[Symbol.iterator] = function(){

//     const cityKeys = Object.keys(this);
//     let cityIndex = 0;
//     let userIndex = 0;

//     return {
//         next: () =>{

//             if(cityIndex > cityKeys.length -1){
//                 return {
//                     value: undefined,
//                     done: true
//                 }
//             }
//             const users = obj[cityKeys[cityIndex]];
//             const user = users[userIndex];

//             const isLastUser = userIndex >= users.length - 1;
//             if(isLastUser){
//                 cityIndex++;
//                 userIndex = 0;
//             }else{
//                 userIndex++;
//             }
//             return {
//                 value: user,
//                 done: false
//             }
//         }
//     }
// };

// const iterator = obj[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for(let value of obj){
//     console.log(value);
// }

// Generator

// obj[Symbol.iterator] = function*(){
//     yield "a";
//     yield "b";
//     yield "c";
// };

// function* test(){
//     yield "a";
//     yield "b";
//     yield "c";
// }

// function* test2(){
//     yield 1;
//     yield* test();
//     yield* ['w','y','z'];
//     yield 2;
// }

//obj[Symbol.iterator] = test;

// const iterator = test2();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

var obj = {
    "Istanbul": [
        "Ahmet",
        "Ali",
        "Ceren",
        "Mehmet"
    ],
    "Ankara": [
        "Ayşe",
        "Hakan"
    ]
};

obj[Symbol.iterator] = function* (){
    const cityKeys = Object.keys(this);
    for(let city of cityKeys){
        for(let name of this[city]){
            yield name;
        }
    }
}

for(let value of obj){
    console.log(value);
}

console.log(Array.from(obj));
console.log([...[1,2,3], ...obj, ...[4,5,6]]);