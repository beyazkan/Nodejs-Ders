// var - let - const
// var a = 5;
// let a = 5;
// const a = 5;

// console.log(a);

// var - local değişken tanımlama
// function test(){
//     var a = 5;
//     console.log(a);
//     return a;
// }

// var a = test();
// console.log(a);

// if(true){
//     var a = 5;
// }

// let ile aynı isimden değişken tanımlanamaz
// if(true){
//     let a = 5;
//     let a = 6;
// }

// const ise let gibi fakat değeri değiştirilmez.
// if(true){
//     const a = 5;
//     a = 10;
// }
// console.log(a);

// const obj = {
//     "a": 1
// }
// obj = {
//     "b": 2
// }
// obj["a"] = 2

// console.log(obj);

// const arr = [1, 2, 3];
// arr.push(5);

// console.log(arr);

// Garbage Collector - Memory Management - Memory Leak
if(true){
    let a = 10;
    console.log(a);
}

