// Örnek ASekron Çalışması
// function test(){
//     setTimeout(() => {
//         console.log("Timeout Çalıştı!");
//     }, 3000);
// }

// test();
// console.log("Program Bitti!");

// Örnek Callback Sekron Çalışması
// function test(callback){
//     setTimeout(()=>{
//         console.log("Timeout Çalıştı!");
//         callback();
//     }, 3000);
// }

// test(() => {console.log("Program Bitti!")});

import fs from "fs";

// fs.readFile() // Asynchronous
// fs.readFileSync() // Synchronous

// Synchronous Örneği
// var data = fs.readFileSync("./test.txt", {encoding: "utf-8", flag: "r"});
// console.log(data);
// console.log("Bitti!");

// Asynchronous Örneği
// var data = fs.readFile("./test.txt", {encoding: "utf-8", flag: "r"}, (err, data) =>{
//     if(err) return console.log(err);
//     console.log(data);
// });
// console.log("Bitti!");