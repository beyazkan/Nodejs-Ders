// Hoisting
// Declare - Initialization - Assignment
//let a;
//a = 5; // Declare
// console.log(a);

// Initialization
//let b;
//b = 8; // Initialization
//console.log(b);

// Assignment
//let c;
//c = 11; // Assignment
//console.log(c);

// TDZ - Temporal Dead Zone
//console.log("test");

// let d = 3;
// console.log(d);
// let e = 8;

// Variable hoisting - Function Hoisting
// Hoist edilirken sıra -> değişkenler -> fonksiyonlar -> sınıflar -> atamalar -> çalıştırma
// test();

// function test(){
//     console.log("Hello World!");
// }

// test = function(){
//     console.log("test");
// }

let a = 5;
function print(){
    console.log(a);

    // Undefined
    //var a = 3;
    // not initizilated
    let a = 3;
}

print();

// 1. a değişkeni declare edildi.
// 2. print değişkenini declare ve initialize etti.
// 3. print fonksiyonu çağrıldı.
// 4. 