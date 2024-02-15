// Arrays in ES6

// const boxes = document.querySelectorAll('.box');

// ES5
// let boxesES5 = Array.prototype.slice.call(boxes);

// boxesES5.forEach(function(box){
//     box.style.backgroundColor = 'green';
// });

// ES6
// Array.from(boxes).forEach(box => box.style.backgroundColor = 'green');

// ES5
// for(let i = 0; i < boxesES5.length; i++){
//     if(boxesES5[i].className =='box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "I'm changed";
//     boxesES5[i].style.backgroundColor = 'blue';
// }

// ES6
// var boxesES6 = Array.from(boxes);

// for(let box of boxesES6){
//     if(box.className == 'box blue'){
//         continue;
//     }
//     box.textContent = "I'm changed";
//     box.style.backgroundColor = 'blue';
// }

// from
// let arr = Array.from('Modern Javascript');
// console.log(arr);

const products = [
    {name: 'Samsung S8', price: 3000},
    {name: 'Samsung S8', price: 3000},
    {name: 'Samsung S7', price: 2000},
    {name: 'Samsung S6', price: 1000}
];

// console.log(Array.from(products, prd => prd.price == 1000));
// console.log(products.find( prd => prd.name == 'Samsung S8'));
// console.log(products.filter(prd => prd.price == 3000));
// console.log(products.findIndex(prd => prd.price == 2000));
// console.log(products.findIndex(prd => prd.price == 5000));

let numbers = ['a','b','c','d'];

// let entries = numbers.entries();

// for(let letter of entries){
//     console.log(letter);
// }

let keys = numbers.keys();

for(let key of keys){
    console.log(key);
}


let values = numbers.values();

for(let value of values){
    console.log(value);
}