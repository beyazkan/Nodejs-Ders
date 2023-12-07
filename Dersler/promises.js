// --- Promise
// - pending
// - resolve -> fullfilled
// - reject -> rejected
// const result = new Promise((resolve, reject) => {
//     //resolve(true);
//     //reject("Bir hata oluştu!");
//     setTimeout(() => {
//         console.log("Timeout Bitti!");
//         resolve(true);
//     }, 3000);
// });

// console.log(result);

// const result = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Timeout Bitti!");
//         //resolve(true);
//         reject("Hata!");
//     }, 3000);
// });

// // .then()
// // .catch()
// // .finally()
// result
//     .then(value => console.log(value))
//     .catch(error => console.log(error))
//     .finally(()=>{
//         console.log("Promise Bitti!");
//     });

// console.log("Bitti!");

// import fetch from "node-fetch"

// fetch("https://www.google.com/")
//     .then(res => res.json())
//     .then(response => console.log(response));
// async function test(){
//         await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve()
//             }, 1000);
//         });
//     console.log("Bitti!");
// }

// await test();
// console.log("Bitti 2!");

// var array = [1,2,3,4];
// array = array.map(v => new Promise((resolve, reject) => setTimeout(() => resolve(v * 2), 1000)));

// console.log(array);

// var array = [1,2,3,4];
// array = await Promise.all(array.map(v => new Promise((resolve, reject) => setTimeout(() => resolve(v * 2), 1000))));

// console.log(array);

// var array = [1,2,3,4];
// Promise.all(array.map(v => new Promise((resolve, reject) => setTimeout(() => resolve(v * 2), 1000))))
//     .then(result => console.log(result));

// var array = [1,2,3,4];
// array = await Promise.any(array.map(v => new Promise((resolve, reject) => setTimeout(() => resolve(v * 2), 1000))));

// console.log(array);

// var array = [1,2,3,4];
// array = await Promise.race(array.map(v => new Promise((resolve, reject) => setTimeout(() => resolve(v * 2), 1000))));

// console.log(array);

import {promisify} from "util"

// var sleep = promisify(setTimeout);
// sleep(3000).then(() => console.log("3 saniye beklendi."));

var sleep = promisify(setTimeout);

await sleep(3000);
console.log("3 saniye beklendi.");