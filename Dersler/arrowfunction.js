// Arrow Functions
// ES5
let welcomeES5 = function (){
    console.log('Hello from ES5');
};

welcomeES5();

// ES6
let welcomeES6 = () => {
    console.log('Hello from ES6');
};

welcomeES6();

// ES6 Tek Satır

let tekSatir = () => console.log('Tek Satır');

tekSatir();

// with parameters
// ES5
let multiplyES5 = function(x, y){
    return x * y;
};

console.log(multiplyES5(10,5));
// ES6
let multiplyES6 = (x,y) => {
    return x * y;
};

console.log(multiplyES6(11,5));

// ES6 Different Use
let nonReturnmultiplyES6 = (x,y) => x * y;

console.log(nonReturnmultiplyES6(5,4));

// ES5 Split Example
let splitES5 = function(text){
    return text.split(' ');
};

console.log(splitES5('Modern Javascript Kursu'));

// ES6 Split Example
let splitES6 = text => text.split(' ');

console.log(splitES6('Modern Javascript Kursu'));

// Object literals
// ES5
let getProductsES5 = function(id, name){
    return {
        id: id,
        name: name
    }
}

console.log(getProductsES5(1, 'Samsung S8'));

let getProductsES6 = (id, name) => ({
    id: id,
    name: name
});

console.log(getProductsES6(2, 'IPhone 6'));

const phones = [
    {name: 'IPhone 8', price: 3000},
    {name: 'IPhone 6', price: 2000},
    {name: 'IPhone 5', price: 1000},
    {name: 'IPhone 7', price: 4000}
];

// ES5
let pricesES5 = phones.map(function(phone){
    return phone.price;
});

console.log(pricesES5);

// ES6
let pricesES6 = phones.map(phone => phone.price);

console.log(pricesES6);

// Filtering

// ES5
const arr = [1,2,3,6,10,20,30,50,55,61,79];

let evenES5 = arr.filter(function(a){
    return a % 2 == 0;
});

console.log(evenES5);

// ES6
let evenES6 = arr.filter(a => a % 2 == 0);
console.log(evenES6);